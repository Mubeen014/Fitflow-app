import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const systemPrompt = `
You are a gym trainer. You help people by creating a suitable workout schedule for them according to their current state and their goals.
All the available user data will be provided to you and you will use that data to make a schedule.
You will create the workout schedule in a JSON format.
You also give them advice about their diet by taking into account their current state, and their goals.
You also give them an approximate timeline in which there goals can be achieved.
Provide your response in a json file with the following format.
{
    "timeline": [
        {
            "goal 1 timeline": "expected time to attain goal 1",
            "goal 2 timeline": "expected time to attain goal 2"
        }
    ],
    "schedule":[
        {
            "Day 1": {
                "Excercise 1 name": "exercise counts and description",
                "Excercise 2 name": "exercise counts and description",
                "Excercise 3 name": "exercise counts and description",
            },
            "Day 2" :{
                "Excercise 1 name": "exercise counts and description",
                "Excercise 2 name": "exercise counts and description",
                "Excercise 3 name": "exercise counts and description"
            },
        },
    ],
    "diet":[
        {
            "Diet advice": "diet advice for the entire schedule"
        }
    ],
}
Only return the json file. No other text. JSON format should be error-free and should be able to be parsed.
Provide the complete JSON file. Don't leave any fillers.
`;

export async function POST(req) {
    try {
        // Get the user input from the request body
        const data = await req.text();

        // Make the request to the LLM API (Groq)
        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: data },
            ],
            model: 'llama3-8b-8192',
            stream: false,
            response_format: {
                type: 'json_object' // Ensuring JSON object response format
            }
        });

        // Ensure choices are returned from the LLM API
        const choices = completion.choices || [];
        if (choices.length === 0) {
            return new Response(JSON.stringify({ error: 'No choices found in API response' }), { status: 400 });
        }

        // Extract the content of the first message choice
        const messageContent = choices[0]?.message?.content;

        if (!messageContent) {
            return new Response(JSON.stringify({ error: 'No content in LLM response' }), { status: 400 });
        }
        let workoutschedule;


        // Try to parse the JSON response content
        try {
            workoutschedule = JSON.parse(messageContent); // Parse the entire response
        } catch (error) {
            console.error('Failed to parse JSON:', error);
            return new Response(JSON.stringify({ error: 'Invalid JSON format received from LLM' }), { status: 500 });
        }

        // Return the parsed workout schedule in the response
        return new Response(JSON.stringify({ workoutschedule }), { status: 200 });

    } catch (error) {
        console.error('Error in POST route:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}

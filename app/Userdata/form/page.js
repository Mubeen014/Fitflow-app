'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jsPDF } from 'jspdf'

const questions = [
  {
    question: "How old are you?",
    options: ["Under 18", "18-25", "26-35", "36-45", "46-60", "60+"]
  },
  {
    question: "What is your gender?",
    options: ["Male", "Female", "Non-binary", "Prefer not to say"]
  },
  {
    question: "What is your height?",
    options: ["Under 5'0\" (152 cm)", "5'0\" - 5'5\" (152-165 cm)", "5'6\" - 5'11\" (166-180 cm)", "6'0\" - 6'4\" (181-193 cm)", "Over 6'4\" (194 cm)"]
  },
  {
    question: "What is your current weight?",
    options: ["Under 100 lbs (45 kg)", "100-150 lbs (45-68 kg)", "151-200 lbs (69-91 kg)", "201-250 lbs (92-113 kg)", "Over 250 lbs (114 kg)"]
  },
  {
    question: "Do you have any medical conditions or injuries that should be considered?",
    options: ["None", "Diabetes", "Hypertension", "Joint pain or arthritis", "Recent injury (within 6 months)", "Other"]
  },
  {
    question: "How would you describe your current fitness level?",
    options: ["Beginner (Less than 3 months of regular exercise)", "Intermediate (3-12 months of regular exercise)", "Advanced (More than 1 year of regular exercise)"]
  },
  {
    question: "What is your primary fitness goal?",
    options: ["Lose weight", "Build muscle", "Improve endurance", "Increase flexibility", "Enhance athletic performance"]
  },
  {
    question: "Do you have any secondary fitness goals?",
    options: ["Improve cardiovascular health", "Tone specific body parts", "Increase strength", "Improve mental well-being", "No secondary goals"]
  },
  {
    question: "Are there any specific areas of your body you'd like to focus on?",
    options: ["Abs/Core", "Legs/Lower body", "Arms/Upper body", "Full body", "No specific focus"]
  },
  {
    question: "What is your desired timeline to achieve your goals?",
    options: ["1-3 months", "3-6 months", "6-12 months", "No specific timeline"]
  },
  {
    question: "How many days a week do you currently exercise?",
    options: ["0-1 days", "2-3 days", "4-5 days", "6-7 days"]
  },
  {
    question: "How long are your typical workout sessions?",
    options: ["Less than 30 minutes", "30-45 minutes", "45-60 minutes", "Over 60 minutes"]
  },
  {
    question: "What types of exercise do you currently do?",
    options: ["Cardio (Running, Cycling, etc.)", "Strength training (Weightlifting, Bodyweight exercises)", "Flexibility training (Yoga, Pilates)", "Mixed/Variety", "None"]
  },
  {
    question: "How intense are your current workouts?",
    options: ["Low (Walking, Light stretching)", "Moderate (Brisk walking, Light weights)", "High (Running, Heavy lifting)"]
  },
  {
    question: "Do you have any preferred exercises or activities?",
    options: ["Running/Jogging", "Swimming", "Cycling", "Weightlifting", "Yoga/Pilates", "No preference"]
  },
  {
    question: "Do you have access to a gym?",
    options: ["Yes, I regularly go to the gym", "Yes, but I prefer to work out at home", "No, I work out at home or outdoors"]
  },
  {
    question: "What equipment do you have access to?",
    options: ["Dumbbells/Barbells", "Resistance bands", "Cardio machines (Treadmill, Bike, etc.)", "Bodyweight exercises only", "Full gym equipment"]
  },
  {
    question: "What type of diet do you prefer or follow?",
    options: ["No specific diet", "Vegetarian", "Vegan", "Paleo", "Keto"]
  },
  {
    question: "Do you have any food allergies or dietary restrictions?",
    options: ["None", "Gluten-free", "Dairy-free", "Nut allergy", "Other"]
  },
  {
    question: "How many meals do you typically eat per day?",
    options: ["1-2 meals", "3 meals", "4-5 meals", "6+ meals"]
  },
  {
    question: "What are your usual meal times?",
    options: ["Early morning (6-8 AM)", "Mid-morning (9-11 AM)", "Afternoon (12-2 PM)", "Evening (6-8 PM)", "Late night (9-11 PM)"]
  },
  {
    question: "How much water do you drink daily?",
    options: ["Less than 4 cups (1 liter)", "4-8 cups (1-2 liters)", "8-12 cups (2-3 liters)", "More than 12 cups (3+ liters)"]
  },
  {
    question: "Do you take any supplements or vitamins regularly?",
    options: ["None", "Protein powder", "Multivitamins", "Omega-3/Fish oil", "Other"]
  },
  {
    question: "How many hours of sleep do you usually get each night?",
    options: ["Less than 5 hours", "5-6 hours", "7-8 hours", "More than 8 hours"]
  },
  {
    question: "How would you rate your current stress levels?",
    options: ["Low", "Moderate", "High", "Very High"]
  },
  {
    question: "How active are you during the day outside of your workouts?",
    options: ["Sedentary (Mostly sitting)", "Lightly active (Occasional movement)", "Moderately active (Regular movement)", "Very active (Physical job, Frequent movement)"]
  },
  {
    question: "What is your occupation?",
    options: ["Desk job (Sedentary)", "Manual labor (Physically demanding)", "Mixed (Some sitting, some physical activity)", "Student", "Other"]
  },
  {
    question: "How much time can you realistically dedicate to working out each day?",
    options: ["Less than 30 minutes", "30-45 minutes", "45-60 minutes", "Over 60 minutes"]
  },
  {
    question: "What makes a workout enjoyable for you?",
    options: ["Music", "Variety in exercises", "Partner workouts", "Achieving milestones", "Other"]
  },
  {
    question: "How motivated are you to stick to a fitness plan?",
    options: ["Low", "Moderate", "High", "Very High"]
  },
  {
    question: "Would you like to receive reminders or motivational messages to keep you on track?",
    options: ["Yes, daily reminders", "Yes, weekly reminders", "No, I prefer not to receive reminders"]
  },
  {
    question: "How would you prefer to track your progress?",
    options: ["Weight", "Measurements", "Performance (e.g., running time, weights lifted)", "Photos", "No preference"]
  },
  {
    question: "How often would you like to change or reassess your workout and nutrition plan?",
    options: ["Weekly", "Bi-weekly", "Monthly", "Every 3 months"]
  }
];

const WorkoutScheduleForm = () => {
  const [answers, setAnswers] = useState({});
  const router = useRouter();
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = async (e) => {
    const answersArray = questions.map((_, index) => answers[index] || null);
    // console.log("Submitted answers:", answersArray);
    // router.push("/")

    const formattedData = `
    this is the user data:
    age: ${answersArray[0]}
    gender: ${answersArray[1]}
    height: ${answersArray[2]}
    weight: ${answersArray[3]}
    Medical condition: ${answersArray[4]}
    Current fitness level: ${answersArray[5]}
    Primary fitness goal: ${answersArray[6]}
    Secondary fitness goal: ${answersArray[7]}
    Which body part to focus on: ${answersArray[8]}
    Timeline to achieve goal: ${answersArray[9]}
    Days to workout in a week: ${answersArray[10]}
    How long are your workout sessions: ${answersArray[11]}
    Preffered excersices: ${answersArray[14]}
    Access to gym equipment: ${answersArray[16]}
    Current diet: ${answersArray[17]}
    Activities outside of workout: ${answersArray[25]}
    `
    // Here you can send the answersArray to your backend or perform any other action
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain',
            },
            body: formattedData,
            });
    
        const result = await response.json();
        if (result) {
            setWorkoutPlan(result.workoutschedule);
        }
        console.log(result.Workoutschedule)
    } catch (error) {
        console.error('Error fetching workout plan:', error);
    }
  };
  const downloadPDF = () => {
    const doc = new jsPDF();
    let yOffset = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - 20; // Width with margins

    doc.setFontSize(16);
    doc.text('Workout Schedule', 10, yOffset);
    yOffset += 10;

    if (workoutPlan) {
        doc.setFontSize(12);

        // Add timeline
        doc.text('Timeline:', 10, yOffset);
        yOffset += 10;
        workoutPlan.timeline.forEach((item) => {
        Object.entries(item).forEach(([goal, time]) => {
            doc.text(`${goal}: ${time}`, 10, yOffset);
            yOffset += 10;
        });
        });

        // Add schedule
        doc.text('Schedule:', 10, yOffset);
        yOffset += 10;
        workoutPlan.schedule.forEach((day) => {
        Object.entries(day).forEach(([dayName, exercises]) => {
            doc.text(dayName, 10, yOffset);
            yOffset += 10;

            Object.entries(exercises).forEach(([exercise, description]) => {
            // Wrap the text if it's too long
            const lines = doc.splitTextToSize(`${exercise}: ${description}`, pageWidth);
            lines.forEach((line) => {
                doc.text(line, 10, yOffset);
                yOffset += 10;
            });
            });
        });
        });

        // Add diet
        doc.text('Diet:', 10, yOffset);
        yOffset += 10;
        workoutPlan.diet.forEach((item) => {
        // Wrap the text if it's too long
        const lines = doc.splitTextToSize(`Advice: ${item['Diet advice']}`, pageWidth);
        lines.forEach((line) => {
            doc.text(line, 10, yOffset);
            yOffset += 10;
        });
        });
    } else {
        doc.text('No workout plan available.', 10, yOffset);
    }

    // Save the PDF
    doc.save('workout-schedule.pdf');
  };
  const handleClickForBothFunctions = async () => {
    try {
        await handleSubmit();

        downloadPDF();
        router.push('/')
    } catch (error) {
        console.error('error', error)
    }
  }


  return (
    <div className="min-h-screen bg-beige-100 py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300">
        <div className="px-4 py-5 sm:p-6 bg-gradient-to-br from-orange-100 to-blue-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 animate-fade-in">Workout Schedule Maker</h2>
          {questions.map((q, questionIndex) => (
            <div key={questionIndex} className="mb-8 animate-slide-in" style={{animationDelay: `${questionIndex * 0.1}s`}}>
              <h3 className="text-xl font-medium text-orange-800 mb-4">{q.question}</h3>
              <div className="space-y-4">
                {q.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center">
                    <input
                      id={`question-${questionIndex}-${optionIndex}`}
                      name={`question-${questionIndex}`}
                      type="radio"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 transition-all duration-200"
                      checked={answers[questionIndex] === option}
                      onChange={() => handleAnswer(questionIndex, option)}
                    />
                    <label 
                      htmlFor={`question-${questionIndex}-${optionIndex}`} 
                      className="ml-3 block text-sm font-medium text-gray-700 hover:text-orange-600 cursor-pointer transition-all duration-200"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 bg-beige-200 text-right sm:px-6">
          <button
            onClick={handleClickForBothFunctions}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutScheduleForm;
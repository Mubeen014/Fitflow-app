'use client';
import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import this if you want to use the table plugin

const Userdata = () => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    goals: '',
    days_per_week: ''
  });
  const [workoutPlan, setWorkoutPlan] = useState(null); // State to store the returned workout plan
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = `
      this is the user data:
      name: ${userData.name}
      age: ${userData.age}
      gender: ${userData.gender}
      weight: ${userData.weight}
      height: ${userData.height}
      goals: ${userData.goals}
      days per week: 3
    `;

    setLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: formattedData,
      });

      const result = await response.json();
      setWorkoutPlan(result.workoutschedule);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching workout plan:', error);
      setLoading(false);
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


  return (
    <div>
      <h1>User Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={userData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={userData.gender} onChange={handleChange} />
        </div>
        <div>
          <label>Weight:</label>
          <input type="text" name="weight" value={userData.weight} onChange={handleChange} />
        </div>
        <div>
          <label>Height:</label>
          <input type="text" name="height" value={userData.height} onChange={handleChange} />
        </div>
        <div>
          <label>Goals:</label>
          <input type="text" name="goals" value={userData.goals} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {workoutPlan && (
        <button onClick={downloadPDF}>Download PDF</button>
      )}
    </div>
  );
};

export default Userdata;

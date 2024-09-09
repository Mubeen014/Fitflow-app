import React from 'react';
import workoutData from '@/workout.json'; // Assuming it's a local JSON file

const WorkoutSchedule = () => {
  const schedule = workoutData.schedule[0]; // Access the schedule array

  return (
    <div>
      <h1>Workout Schedule</h1>
      <div>
        {Object.entries(schedule).map(([day, exercises], index) => (
          <div key={index}>
            <h2>{day}</h2>
            {Object.entries(exercises).map(([exercise, details], idx) => (
              <div key={idx}>
                <strong>{exercise}</strong>: {details}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSchedule;

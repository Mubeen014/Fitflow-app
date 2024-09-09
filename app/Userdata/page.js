// 'use client';
// import { useState } from 'react';

// const Userdata = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     weight: '',
//     height: '',
//     goals: '',
//     days_per_week: ''
//   });
//   const [workoutPlan, setWorkoutPlan] = useState(null); // State to store the returned workout plan
//   const [loading, setLoading] = useState(false); // State to handle loading

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Format the data as required by the LLM prompt
//     const formattedData = `
//       this is the user data:
//       name: ${userData.name}
//       age: ${userData.age}
//       gender: ${userData.gender}
//       weight: ${userData.weight}
//       height: ${userData.height}
//       goals: ${userData.goals}
//       days per week: 3
//     `;

//     setLoading(true); // Set loading to true before sending the request

//     try {
//       // Send formatted data to the backend API
//       const response = await fetch('/api/generate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'text/plain', // Setting as text since it's plain data
//         },
//         body: formattedData,
//       });

//       const result = await response.json();
//       setWorkoutPlan(result.workoutschedule); // Store the workout schedule in state
//       setLoading(false); // Set loading to false after getting the response
//     } catch (error) {
//       console.error('Error fetching workout plan:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>User Data</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={userData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input type="number" name="age" value={userData.age} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <input type="text" name="gender" value={userData.gender} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Weight:</label>
//           <input type="text" name="weight" value={userData.weight} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Height:</label>
//           <input type="text" name="height" value={userData.height} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Goals:</label>
//           <input type="text" name="goals" value={userData.goals} onChange={handleChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {loading && <p>Loading...</p>} {/* Show loading message while waiting for response */}

//       {/* Display the workout plan if it exists */}
//       {workoutPlan && (
//         <div>
//           <h2>Workout Plan</h2>

//           {/* Display Timeline */}
//           <section>
//             <h3>Timeline</h3>
//             {workoutPlan.timeline.map((item, index) => (
//               <div key={index}>
//                 {Object.entries(item).map(([goal, time], i) => (
//                   <p key={i}>
//                     <strong>{goal}:</strong> {time}
//                   </p>
//                 ))}
//               </div>
//             ))}
//           </section>

//           {/* Display Schedule */}
//           <section>
//             <h3>Schedule</h3>
//             {workoutPlan.schedule.map((day, index) => (
//               <div key={index}>
//                 {Object.entries(day).map(([dayName, exercises], i) => (
//                   <div key={i}>
//                     <h4>{dayName}</h4>
//                     {Object.entries(exercises).map(([exercise, description], j) => (
//                       <p key={j}>
//                         <strong>{exercise}:</strong> {description}
//                       </p>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </section>

//           {/* Display Diet */}
//           <section>
//             <h3>Diet Advice</h3>
//             {workoutPlan.diet.map((item, index) => (
//               <p key={index}>
//                 <strong>Advice:</strong> {item['Diet advice']}
//               </p>
//             ))}
//           </section>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Userdata;

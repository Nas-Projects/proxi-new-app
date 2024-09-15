// const Scheduling =()=>{
//     return <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//     <h2 className="text-2xl font-semibold text-gray-800">Schedule a 1-on-1 Session</h2>
//     <form onSubmit={handleSchedule}>
//       <label className="block mb-2 text-sm font-medium text-gray-700">Session Type</label>
//       <select
//         className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
//         value={sessionType}
//         onChange={(e) => setSessionType(e.target.value)}
//       >
//         <option value="in_person">In-Person</option>
//         <option value="virtual">Virtual</option>
//       </select>
  
//       {sessionType === "virtual" && (
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Virtual Meeting Link
//           </label>
//           <input
//             type="url"
//             className="block w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Enter meeting URL"
//             value={meetingUrl}
//             onChange={(e) => setMeetingUrl(e.target.value)}
//           />
//         </div>
//       )}
  
//       {sessionType === "in_person" && (
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-700">Location</label>
//           <input
//             type="text"
//             className="block w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </div>
//       )}
  
//       <div className="mb-4">
//         <label className="block mb-2 text-sm font-medium text-gray-700">Session Time</label>
//         <input
//           type="datetime-local"
//           className="block w-full p-2 border border-gray-300 rounded-md"
//           value={sessionTime}
//           onChange={(e) => setSessionTime(e.target.value)}
//         />
//       </div>
  
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold"
//       >
//         Schedule Session
//       </button>
//     </form>
//   </div>
  
// }


import { useState } from 'react';

const ScheduleSessionForm = () => {
  // Create state for session type (either in_person or virtual)
  const [sessionType, setSessionType] = useState('in_person'); // Default to in_person

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form with the selected sessionType
    console.log('Session Type:', sessionType);
    // Submit logic here
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Schedule a 1-on-1 Session</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700">Session Type</label>
        <select
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={sessionType}
          onChange={(e) => setSessionType(e.target.value)} // Update session type based on user selection
        >
          <option value="in_person">In-Person</option>
          <option value="virtual">Virtual</option>
        </select>

        {/* Additional form fields here */}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold"
        >
          Schedule Session
        </button>
      </form>
    </div>
  );
};

export default ScheduleSessionForm;

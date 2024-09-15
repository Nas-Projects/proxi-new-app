
const TrackProgress = ({ userProfile, trackData }) => {
  // Ensure both userProfile and trackData exist
  if (!userProfile?.track_id || !trackData) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">No Track Found</h2>
        <p className="text-gray-600 mb-4">You have not started any track yet.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Pick a Track
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Track Progress</h2>
      <p className="text-gray-600 mb-4">Track: {trackData.title}</p>
      <div className="flex justify-between mb-2">
        <span>Total Exercises: {trackData.exercises.length}</span>
        {/* Assuming you're storing the number of completed exercises */}
        <span>Completed Exercises: {userProfile.completed_exercises}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${userProfile.progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">Progress: {userProfile.progress}%</p>
    </div>
  );
};

export default TrackProgress;

// const TrackProgress = ({ userProfile }) => {
//   // Check if userProfile is available before accessing its properties
//   if (!userProfile || !userProfile.track_id) {
//     return (
//       <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold text-gray-800">No Track Found</h2>
//         <p className="text-gray-600 mb-4">You have not started any track yet.</p>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//           Pick a Track
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold text-gray-800">Track Progress</h2>
//       <p className="text-gray-600 mb-4">Track: {userProfile.track.title}</p>
//       <div className="flex justify-between mb-2">
//         <span>Total Exercises: {userProfile.userTrack.total_exercises}</span>
//         <span>Completed Exercises: {userProfile.userTrack.completed_exercises}</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
//         <div
//           className="bg-blue-500 h-4 rounded-full"
//           style={{ width: `${userProfile.userTrack.progress}%` }}
//         ></div>
//       </div>
//       <p className="text-sm text-gray-500">Progress: {userProfile.userTrack.progress}%</p>
//     </div>
//   );
// };

// export default TrackProgress;
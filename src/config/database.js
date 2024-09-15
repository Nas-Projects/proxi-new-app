// import mongoose from 'mongoose';

// let connected = false;

// const connectDB = async () => {
//   mongoose.set('strictQuery', true);
// // ----DB
//   // If the database is already connected, don't connect again
//   if (connected) {
//     console.log('MongoDB is already connected...');
//     return;
//   }

//   // Connect to MongoDB
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     connected = true;
//     console.log('MongoDB connected...');
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;


import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI; // Ensure your environment variable is set

  if (!uri) {
    throw new Error('MongoDB connection string (MONGODB_URI) is undefined.');
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

export default connectDB;


// import mongoose from 'mongoose';

// let isConnected = false; // Track the connection state

// const connectDB = async () => {
//   if (isConnected) {
//     console.log('MongoDB is already connected');
//     return;
//   }

//   const uri = process.env.MONGODB_URI; // Ensure your environment variable is set

//   if (!uri) {
//     throw new Error('MongoDB connection string (MONGODB_URI) is undefined.');
//   }

//   try {
//     const db = await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = db.connections[0].readyState;
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); // Exit the process if MongoDB connection fails
//   }
// };

// export default connectDB;
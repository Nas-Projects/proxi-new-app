// // pages/api/propertiesForSale.js

// import { MongoClient } from 'mongodb';

// const uri = 'YOUR_MONGODB_CONNECTION_STRING';
// const client = new MongoClient(uri);

// export default async function handler(req, res) {
//   try {
//     await client.connect();
//     const database = client.db('your_database_name');
//     const properties = database.collection('properties');

//     const query = { forSale: true };
//     const results = await properties.find(query).toArray();

//     res.status(200).json(results);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch properties' });
//   } finally {
//     await client.close();
//   }
// }

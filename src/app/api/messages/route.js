import connectDB from '@/config/database';
import Message from '../../../models/Message';

import User from '../../../models/User';
import mongoose from 'mongoose';
import { getSessionUser } from '@/utils/getSessionUser';
// import { Console } from 'console';
import { ObjectId } from 'mongodb';
export const dynamic = 'force-dynamic';

// GET /api/messages
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    console.log("MESSAGE_GET_User ID is required ---GET MESSAGES", sessionUser)

    if (!sessionUser || !sessionUser.user) {
      return new Response(JSON.stringify('User ID is required'), {
        status: 401,
      });
    }

    const { userId } = sessionUser;

    const readMessages = await Message.find({ recipient: userId, read: true })
      .sort({ createdAt: -1 }) // Sort read messages in asc order
      .populate('sender', 'username')
      .populate('property', 'name');

    const unreadMessages = await Message.find({
      recipient: userId,
      read: false,
    })
      .sort({ createdAt: -1 }) // Sort read messages in asc order
      .populate('sender', 'username')
      .populate('property', 'name');

    const messages = [...unreadMessages, ...readMessages];

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

// POST /api/messages
export const POST = async (request) => {
  try {
    await connectDB();

    const { name, email, phone, message, property, recipient, supabaseUser } =
      await request.json();
      const sessionUser = await getSessionUser();
      const { user } = sessionUser;
      
    // Handle unauthenticated user case
    if (!sessionUser || !sessionUser.user) {
      // Handle non-authenticated users
      if (!supabaseUser) {
        return new Response(
          JSON.stringify({ message: 'You must be logged in to send a message' }),
          { status: 401 }
        );
      }
      // Handle case where user is unauthenticated but provides contact details
      const newMessage = new Message({
        sender: email,  // Use email as sender
        recipient: recipient,
        property: property,
        name,
        email,
        phone,
        body: message,
        read: false,
      });

      await newMessage.save();
      return new Response(JSON.stringify({ message: 'Message Sent' }), { status: 200 });
    }

 
    // if (!sessionUser || !sessionUser.user) {
    //   return new Response(
    //     JSON.stringify({ message: 'You must be logged in to send a message' }),
    //     { status: 401 }
    //   );
    // }


    if (supabaseUser) {
      // Find MongoDB user by Supabase ID
      const mongoUser = await User.findOne({ supabaseUserId: user.id });
      if (!mongoUser) {
        return new Response(
          JSON.stringify({ message: 'Supabase user not found in MongoDB' }),
          { status: 404 }
        );
      }

      // Use MongoDB user ID for sender
      const senderId = mongoUser._id;
      const recipientId = new mongoose.Types.ObjectId(recipient);
      const propertyId = new mongoose.Types.ObjectId(property);

      const newMessage = new Message({
        sender: senderId,
        recipient: recipientId,
        property: propertyId,
        name,
        email,
        phone,
        body: message,
        read: false,
      });

      await newMessage.save();
      return new Response(JSON.stringify({ message: 'Message Sent' }), { status: 200 });
    } else {
      // Use Supabase ID directly as user is in MongoDB
      const senderId = new mongoose.Types.ObjectId(user.id);
      const recipientId = new mongoose.Types.ObjectId(recipient);
      const propertyId = new mongoose.Types.ObjectId(property);

      const newMessage = new Message({
        sender: senderId,
        recipient: recipientId,
        property: propertyId,
        name,
        email,
        phone,
        body: message,
        read: false,
      });

      await newMessage.save();
      return new Response(JSON.stringify({ message: 'Message Sent' }), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
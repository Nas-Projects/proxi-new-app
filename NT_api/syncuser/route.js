import connectDB from '../../src/config/database';
import User from '../../src/models/User';


export default async function handler(req, res) {
  const supabaseUser = req.body;

  try {
    await connectDB();
    console.log("CALLED FORM ROOT/API")
    // Check if the user already exists in MongoDB
    let dbUser = await User.findOne({ email: supabaseUser.email });

    if (!dbUser) {
      // If user doesn't exist, create a new one
      dbUser = new User({
        name: `${supabaseUser.user_metadata.first_name} ${supabaseUser.user_metadata.last_name}`,
        email: supabaseUser.email,
        phone: supabaseUser.user_metadata.phone || '',
        userRole: supabaseUser.user_metadata.role || '',  // Use userRole to store app-specific roles
        role: supabaseUser.role || 'unauthenticated', // Supabase role (e.g., 'authenticated', 'unauthenticated')
        realEstateLicense: supabaseUser.user_metadata.license || null, // License if applicable
        supabaseUserId: supabaseUser.id, // Store Supabase user ID
      });

      await dbUser.save();
    } else {
      // If the user exists, update any missing fields or data changes
      dbUser.name = `${supabaseUser.user_metadata.first_name} ${supabaseUser.user_metadata.last_name}` || dbUser.name;
      dbUser.phone = supabaseUser.user_metadata.phone || dbUser.phone;
      dbUser.userRole = supabaseUser.user_metadata.role || dbUser.userRole;
      dbUser.realEstateLicense = supabaseUser.user_metadata.license || dbUser.realEstateLicense;
      dbUser.supabaseUserId = supabaseUser.id || dbUser.supabaseUserId;
      dbUser.role = supabaseUser.role || dbUser.role;

      await dbUser.save();
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to sync user to MongoDB:', err);
    res.status(500).json({ error: 'Failed to sync user to MongoDB' });
  }
}

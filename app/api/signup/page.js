import connectDB from '../../lib/mongodb';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = await User.create({ username, email, password });
      if (user) {
        return res.status(201).json({ message: 'User created successfully' });
      } else {
        return res.status(400).json({ message: 'Invalid user data' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

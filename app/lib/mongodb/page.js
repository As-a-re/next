import mongoose from 'mongoose';

// MongoDB Connection Utility
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Portfolio Schema
const PortfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  template: { type: String, required: false }, // Template ID or name
  content: {
    theme: {
      primaryColor: { type: String, default: '#000000' },
      secondaryColor: { type: String, default: '#ffffff' },
    },
    layout: { type: String, default: 'default' },
    sections: { type: Array, default: [] }, // Array of sections (e.g., About, Services)
  },
  isPublished: { type: Boolean, default: false },
  lastEdited: { type: Date, default: Date.now },
});

// Prevent model re-compilation during hot reloads in development
const Portfolio =
  mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);

export { connectDB, Portfolio };

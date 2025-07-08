import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// ✅ Replace with your actual deployed frontend URL
const FRONTEND_URL = 'https://refresh-creatives.vercel.app';

app.use(cors({
  origin: FRONTEND_URL
}));
app.use(express.json());

// ✅ Replace with your MongoDB connection string in the .env file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// 🛒 Order Schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  products: Array
});

const Order = mongoose.model('Order', orderSchema);

// 📦 Order API Endpoint
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error placing order' });
  }
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

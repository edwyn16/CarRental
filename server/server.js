import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';

// Initialize Express app
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors())
app.use(express.json())

// Basic route
app.get('/', (req, res) => res.send("Server is running"));

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
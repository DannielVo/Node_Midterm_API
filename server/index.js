import dotenv from "dotenv";
import app from "./app.js";
import { connectMongo } from "./src/config/connectDB.js";

dotenv.config();

// MongoDB connection
connectMongo();

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

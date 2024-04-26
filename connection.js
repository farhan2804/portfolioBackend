const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const connectionString = "mongodb://localhost:27017/portfoliodata"; // Local connection string
    await mongoose.connect(connectionString);
    console.log("Connection successful!");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

connectToDatabase();

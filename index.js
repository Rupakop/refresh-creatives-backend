const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/api", (req, res) => {
  res.send("Backend is working");
});

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port 5000");
  });
}).catch(err => console.error("MongoDB error:", err));

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { database } = require("./config/config");

// Middleware
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true })); // URL-encoded body parser

// Database Connection
mongoose
  .connect(database.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// API Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/data", require("./routes/dataRoutes"));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

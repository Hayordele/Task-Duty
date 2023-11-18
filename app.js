const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const notFound = require("./middlewares/notFound");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/task", taskRoutes);

app.use(notFound);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(3000, () => {
  console.log("server is litening o PORT:3000");
});

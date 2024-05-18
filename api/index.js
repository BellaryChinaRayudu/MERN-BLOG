import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/User.route.js";

mongoose
  .connect(
    "mongodb+srv://chinarayudu:password3456@mern-blog.empuson.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog"
  )
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);

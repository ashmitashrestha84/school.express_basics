import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/school")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed");
      console.log(err);
    });
};
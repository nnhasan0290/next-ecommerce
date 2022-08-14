import mongoose from "mongoose";
const { Schema } = mongoose;

const User = mongoose.model(
  "User",
  Schema({
    fname: {
      type: String,
      required: [true, "Please enter the frist name"],
    },
    lname: {
      type: String,
      required: [true, "Please enter the last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
    },
    role: {
      type: String,
      default: "user",
    },
  })
);

export default User;

import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("mongodb has connected successfully");
    })
    .catch((err) => console.log("mongodb error : " + err));
};

export default connectDatabase;

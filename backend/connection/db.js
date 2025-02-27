import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.mongo_url)
      .then(() => console.log("connected to db"));
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDb;

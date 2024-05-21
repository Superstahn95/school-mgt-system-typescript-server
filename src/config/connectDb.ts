import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_CONN_STRING as string
    );
    console.log(`connection established ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;

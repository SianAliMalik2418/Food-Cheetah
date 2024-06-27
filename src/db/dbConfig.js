import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing Mongoose Connection!");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI);

    connection.isConnected = db.connections[0].readyState;

    const mongoConnection = mongoose.connection;

    mongoConnection.on("success", () => {
      console.log("MONGOOSE CONNECTED!");
    });

    mongoConnection.on("error", () => {
      console.log("ERROR WHILE CONNECTING MONGOOSE!");
    });
  } catch (error) {
    console.log("SOMETHING WENT WRONG WHILE CONNECTING MONGOOSE!", error);
  }
};

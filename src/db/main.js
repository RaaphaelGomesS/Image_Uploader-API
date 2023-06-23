import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("conectado com banco");
  } catch (error) {
    console.log(error);
  }
}

export default main();

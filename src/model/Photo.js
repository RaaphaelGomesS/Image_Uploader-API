import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    unique: true
  },
               
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Blog = mongoose.model("Blog", blogSchema);

export default Blog
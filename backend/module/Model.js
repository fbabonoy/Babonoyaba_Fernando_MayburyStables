import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Post", postSchema)

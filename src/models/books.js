import { Schema, SchemaType, model, models } from "mongoose";

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String },
    description: { type: String },
    url: { type: String, required: true },
    language: { type: String },
    image: { type: String },
    createdAt: {
        type:Date,
        default: Date.now()
    },
})

const Books = models.book || model("book", BookSchema)

export default Books


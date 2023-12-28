import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "user name is required"]
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique: [true,"email is already used"]
    },
    image:{
        type: String,
    },
    role: {
        type: String,
        enum: ['Client', 'Admin'],
        default:'Client',
    },
    post:{
        type:[{type: Schema.Types.ObjectId, ref:"Post"}],
    },
    save:{
        type:[{type: Schema.Types.ObjectId, ref:"Post"}],
    }
})

const User = models.User || model("User", UserSchema)

export default User
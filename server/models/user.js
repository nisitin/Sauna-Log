import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    },
},
    { timestamps: true }
)


export default mongoose.model("User", UserSchema);
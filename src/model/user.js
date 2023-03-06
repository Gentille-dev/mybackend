import mongoose from "mongoose";
import bycript from "bcrypt"

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


// define the compare password function to help us to compare the hashed password
// and the entered password
userSchema.methods.comparePassword = async function (password){
const match = await bycript.compare(password, this.password);
return match
}

const User = mongoose.model("User", userSchema)

export default User
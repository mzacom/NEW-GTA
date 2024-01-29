import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    country: { type: String, required: true },
    phonenumber: { type: String, required: true },
    password: { type: String, required: true }
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
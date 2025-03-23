import mongoose from "mongoose";

// Define the schema for the user model.
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
});

const UserModel = mongoose.model("User", UserSchema);
export  default UserModel;

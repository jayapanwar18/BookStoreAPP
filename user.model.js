//schema deign for users
import mongoose from "mongoose";
// import { type } from "os";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    email :{
      type: String,
      required: true,
      unique:true
    },
    password:{
        type:String,
        required:true
    },
});
const User= mongoose.model("user",userSchema);

export default User;
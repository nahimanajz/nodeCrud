//const users = [];
//export default users;
//import mongoose from "mongoose";
const mongoose = require("mongoose");
const userSchema = ({
    fullnames: {
        type: String,
        required:true,
    },
    username: {
        type:String,
        required:true,
    },
    phone: {
        type:String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type:String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
      }
});

//export default mongoose.model("users",userSchema);
module.exports = mongoose.model("users",userSchema);
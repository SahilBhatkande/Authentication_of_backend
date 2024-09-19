import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required : true
    },

    email:{
        type:String,
        required : true
    },

    password:{
        type:String,
        required : true
    },

    isAdmin:{
        type:Boolean,
        required : true,
        default: false
    },

    pic:{
        type:String,
        
    }


} , {timestaps: true});


userSchema.pre("save" , async function (next) {

    if(!this.Modified("password"))
    {
        next();
    }

    const salt = await bcryptjs.gensalt(10);
    this.password = await bcryptjs.hash(this.password , salt);
    
})


const User = mongoose.model("User" , userSchema)

export default User;
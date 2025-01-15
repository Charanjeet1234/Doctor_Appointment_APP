import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:email, required:true, unique:true},
    password:{type:String, required:true},
    image:{type:String, default:"data:image/jpeg;base64,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"},
    // https://www.base64-image.de/ website to get the image
    address:{type:Object, default:{line1:"",line2:""}},
    gender:{type:String, default:"Not Selected"},
    dob:{type:String, default:"Not Selected"},
    phone:{type:String, default:"0000000000"}

   
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)
export default userModel



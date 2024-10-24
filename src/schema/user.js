import mongoose  from "mongoose";

const userSchema  = mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength: 8,
        maxlength:20
    },
    email:{
        type:String,
        required: [true, 'User email is  required'],
        validate:{
            validator:function(emailValue){
                return /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(emailValue)
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        validate :{
            validation:function(passwordValue){
                return /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(passwordValue)
            },message :"Password is not valid "
        }
    }
},{timestamps: true });

const user  = mongoose.model("User",userSchema );

export default user;
import mongoose,{Schema,Document} from 'mongoose';

interface userInterface extends Document{
    username:string;
    password:string;
};

const UserSchema=new Schema<userInterface>({
    username:{
        type:String,
        maxLength:10,
        minLength:3,
        required:[true,"name required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password required"]
    }
},{timestamps:true});

const UserModel=mongoose.model<userInterface>('user',UserSchema);

export default UserModel;


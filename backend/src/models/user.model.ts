import mongoose,{Schema,Document} from 'mongoose';

interface userInterface extends Document{
    name:string;
    password:string;
};

const UserSchema=new Schema<userInterface>({
    name:{
        type:String,
        maxLength:10,
        minLength:3,
        required:[true,"name required"]
    },
    password:{
        type:String,
        required:[true,"password required"]
    }
});

const UserModel=mongoose.model<userInterface>('user',UserSchema);

export default UserModel;


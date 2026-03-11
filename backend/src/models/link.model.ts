import mongoose,{Schema,Document,Types} from 'mongoose';


interface linkInterface extends Document{
    hash:string;
    userId:Types.ObjectId;
};

const LinkSchema=new Schema<linkInterface>({
    hash:{
        type:String,
        required:[true,"hash required"]
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref: "user",
        required:[true,"userId required"]
    }
},{timestamps:true});

const LinkModel=mongoose.model<linkInterface>('link',LinkSchema);

export default LinkModel;
import mongoose,{Schema,Document} from 'mongoose';

interface tagInterface extends Document{
    title:string;
};

const TagSchema=new Schema<tagInterface>({
    title:{
        type:String,
    }
});

const TagModel=mongoose.model<tagInterface>('tag',TagSchema);

export default TagModel;


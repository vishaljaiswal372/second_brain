import mongoose, { Schema, Document, Types } from "mongoose";

interface ContentInterface extends Document {
  link: string;
  type: string;
  title: string;
  tags: string[];
  userId: Types.ObjectId;
}

const ContentSchema = new Schema<ContentInterface>(
  {
    link: {
      type: String,
      required: [true, "link required"]
    },
    type: {
      type: String,
      required: [true, "type required"]
    },
    title: {
      type: String,
      required: [true, "title required"]
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "tag",
        required: [true, "tags required"]
      }
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "userId required"]
    }
  },
  { timestamps: true }
);

const ContentModel = mongoose.model<ContentInterface>("Content", ContentSchema);

export default ContentModel;
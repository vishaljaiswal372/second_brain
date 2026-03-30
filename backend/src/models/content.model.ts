import mongoose, { Schema, Document, Types } from "mongoose";

interface ContentInterface extends Document {
  link: string;
  type: string;
  title: string;
  tags: Types.ObjectId[];
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
      required: [true, "type required"],
      enum:{// it is used to restrict a field to only specific allowed values.
        values:["document","tweet","youtube","link"],
        message:"type must be one of the following: {VALUE}"
      }
    },
    title: {
      type: String,
      required: [true, "title required"]
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "tag",
        default: []
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
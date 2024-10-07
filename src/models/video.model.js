import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoScheme = new Schema({

  videofile: {
    type: String,
    required: true,

  },
  thumbnails: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    dafault: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true })


videoScheme.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoScheme)
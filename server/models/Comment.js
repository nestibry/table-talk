const { Schema, Types } = require('mongoose');

const commentSchema = new Schema(
  {
    comment_id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    comment_body: {
      type: String,
      required: true,
      maxLength: 255
    },
    creator_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

module.exports = commentSchema;
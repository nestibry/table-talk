const { Schema, Types } = require('mongoose');

const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    commentBody: {
      type: String,
      required: true,
      maxLength: 255
    },
    username: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return date.toLocaleString();
      }
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

module.exports = commentSchema;
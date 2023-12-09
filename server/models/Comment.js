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
    email: {
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
    timestamps: true,
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = commentSchema;
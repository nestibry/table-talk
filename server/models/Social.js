const { Schema, model } = require('mongoose');
const commentSchema = require("./Comment");

const socialSchema = new Schema({
  photo_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 255
  },
  creator_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  liked_users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  comments: [commentSchema]
}, {
  timestamps: true
},
);

const Social = model('Social', socialSchema);
module.exports = Social;
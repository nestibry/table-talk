const { Schema, model } = require('mongoose');

const socialSchema = new Schema({
  photo_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
});

const Social = model('Social', socialSchema);
module.exports = Social;
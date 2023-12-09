const { Schema, model } = require('mongoose');
const commentSchema = require("./Comment");

const reviewSchema = new Schema({
  photo_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 1000
  },
  restaurant_name: {
    type: String,
    required: true,
  },
  restaurant_city: {
    type: String,
    required: true,
  },
  is_recommended: {
    type: Boolean,
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
},
  {
    timestamps: true
  },
);

const Review = model('Review', reviewSchema);
module.exports = Review;
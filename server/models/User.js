const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i, "Please use a valid email address."],
  },
  display_name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 24
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  profile_pic: {
    type: String,
    default: "default"
  },
  age: {
    type: String
  },
  location_state: {
    type: String
  },
  gender_identity: {
    type: String
  },
  status: {
    type: String,
    default: "Enjoying TableTalk"
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  social_posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Social',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
}, {
  timestamps: true
},
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = model('User', userSchema);
module.exports = User;

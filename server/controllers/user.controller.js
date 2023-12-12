const { User } = require('../models');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const Model = User;

async function verifyUser(req) {
  const cookie = req.cookies["auth-cookie"]
  if (!cookie) return false

  const isVerified = jwt.verify(cookie, process.env.JWT_SECRET)
  if (!isVerified) return false

  const user = await Model.findOne({ _id: isVerified.id })
  if (!user) return false

  return user
}


async function authenticate(data) {
  let user

  try {
    user = await Model.findOne({ email: data.email })
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }

  if (!user) throw new Error("No user found")

  let userIsOk = false
  try {
    userIsOk = await bcrypt.compare(data.password, user.password)
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }

  if (!userIsOk) throw new Error("Could not login")
  return user;
}


async function getAllItems() {
  try {
    return await Model.find()
      .populate({ path: "followers", select: "display_name profile_pic status" })
      .populate({ path: "following", select: "display_name profile_pic status" })
      .populate({ path: "social_posts" })
      .populate({ path: "reviews" });
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemById(id) {
  try {
    return await Model.findById(id)
      .populate({ path: "followers", select: "display_name profile_pic status" })
      .populate({ path: "following", select: "display_name profile_pic status" })
      .populate({ path: "social_posts" })
      .populate({ path: "reviews" });
  } catch (err) {
    throw new Error(err)
  }
}

async function performSearch(id, data, isFollowing) {
  const re = new RegExp(`${data}`, "i");
  try {
    if (isFollowing) {
      const userInfo = await Model.findById(id, "following")
        .populate({ path: "following", select: "display_name profile_pic status" });
      // console.log(userInfo);
      const payload = [];

      // const test = regex.test(userInfo.following[0].display_name);
      // console.log(test);

      userInfo.following.forEach(item => {
        if (re.test(item.display_name)) {
          payload.push(item);
        }
      })

      return payload;
    } else {
      return await Model.find({ "display_name": re })
        .select("display_name profile_pic status");
    }
  } catch (err) {
    throw new Error(err)
  }
}

// use this as our signup handler
async function createItem(data) {
  try {
    return await Model.create(data);
  } catch (err) {
    throw new Error(err)
  }
}

async function addFollow(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      { $addToSet: data },
      {
        new: true,
        upsert: true
      }
    )
      .select("display_name following followers");
  } catch (err) {
    throw new Error(err)
  }
}

async function removeFollow(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      { $pull: data },
      {
        new: true,
        upsert: true,
      }
    )
      .select("display_name following followers");
  } catch (err) {
    throw new Error(err)
  }
}

async function updateItemById(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
        upsert: true,
      }
    );
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteItemById(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllUsers: getAllItems,
  getUserById: getItemById,
  performSearch: performSearch,
  createUser: createItem,
  addFollow: addFollow,
  removeFollow: removeFollow,
  updateUserById: updateItemById,
  deleteUserById: deleteItemById,
  authenticate,
  verifyUser
}

const { Social } = require('../models');
const Model = Social;

async function getAllItems() {
  try {
    return await Model.find()
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({ path: "liked_users", select: "display_name" });
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemById(id) {
  try {
    return await Model.findById(id)
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({ path: "liked_users", select: "display_name" });
  } catch (err) {
    throw new Error(err)
  }
}

async function createItem(data) {
  try {
    return await Model.create(data);
  } catch (err) {
    throw new Error(err)
  }
}

async function createComment(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      { $push: data },
      {
        new: true,
        upsert: true
      }
    );
  } catch (err) {
    throw new Error(err)
  }
}

async function addLike(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      { $addToSet: { "liked_users": data } },
      {
        new: true,
        upsert: true
      }
    )
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({ path: "liked_users", select: "display_name" });
  } catch (err) {
    throw new Error(err)
  }
}

async function removeLike(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      { $pull: { "liked_users": data } },
      {
        new: true,
        upsert: true
      }
    )
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({ path: "liked_users", select: "display_name" });
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
  getAllSocials: getAllItems,
  getSocialById: getItemById,
  createSocial: createItem,
  createComment: createComment,
  addLike: addLike,
  removeLike: removeLike,
  updateSocialById: updateItemById,
  deleteSocialById: deleteItemById
}

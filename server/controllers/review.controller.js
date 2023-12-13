const { Review } = require('../models');
const { add } = require('../models/Comment');
const Model = Review;

async function getAllItems() {
  try {
    return await Model.find()
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({ path: "liked_users", select: "display_name" })
      .populate({ path: "comments.creator_id", select: "display_name profile_pic status" });
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemById(id) {
  try {
    return await Model.findById(id)
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({ path: "liked_users", select: "display_name" })
      .populate({ path: "comments.creator_id", select: "display_name profile_pic status" });
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemByUserId(userId) {
  try {
    return await Model.find({ creator_id: userId })
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({ path: "liked_users", select: "display_name" })
      .populate({ path: "comments.creator_id", select: "display_name profile_pic status" });
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

async function createComment(id, commentText, commentUserId) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: {
            comment_body: commentText,
            creator_id: commentUserId
          }
        }
      },
      {
        new: true,
        upsert: true
      }
    )
      .select("creator_id comments")
      .populate({ path: "creator_id", select: "display_name profile_pic status" })
      .populate({
        path: "comments",
        populate: { path: "creator_id", select: "display_name profile_pic status" }
      });
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
  getAllReviews: getAllItems,
  getReviewById: getItemById,
  getReviewByUserId: getItemByUserId,
  createReview: createItem,
  createComment: createComment,
  addLike: addLike,
  removeLike: removeLike,
  updateReviewById: updateItemById,
  deleteReviewById: deleteItemById
}

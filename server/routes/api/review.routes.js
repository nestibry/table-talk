const router = require('express').Router();

// Import any controllers needed here
const { getAllReviews, getReviewById, createReview, createComment, updateReviewById, deleteReviewById } = require('../../controllers/review.controller');

// Declare the routes that point to the controllers above
router.get("/", async (req, res) => {
  try {
    const payload = await getAllReviews()
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const payload = await getReviewById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createReview(req.body)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const payload = await updateReviewById(req.params.id, req.body)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.put("/:id/like", async (req, res) => {
  try {
    let payload;
    // req.body needs to look like this: 
    // {
    //   actionUserId: the users id,
    //   type: like or unlike
    // }

    const { actionUserId, type } = req.body;

    if (type === "like") {
      payload = await addLike(req.params.id, actionUserId);
    } else if (type === "unlike") {
      payload = await removeLike(req.params.id, actionUserId);
    }

    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.put("/:id/comment", async (req, res) => {
  try {
    // req.body needs to look like this: 
    // {
    //   comments: {
    //      commentBody: the text of the comment
    //      creatorId: the id of the user who made the comment
    //   }
    // }

    const { commentBody, creatorId } = req.body

    const payload = await createComment(req.params.id, commentBody, creatorId);
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteReviewById(req.params.id)
    res.status(200).json({ result: "success", payload })
  } catch (err) {
    res.status(500).json({ result: "error", payload: err.message })
  }
})

module.exports = router;
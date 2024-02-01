const express = require("express");

const router = express.Router();

// Import controller 

// const {dummyLink} = require("../controllers/likeController");

const {createComment} = require("../controllers/CommentController");

const {createPost } = require("../controllers/postController");

const { getAllPosts} = require("../controllers/getallpost");

const {likePost, unlikePost} = require("../controllers/LikeController");




// mapping create 

// router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)



// export 

module.exports = router;




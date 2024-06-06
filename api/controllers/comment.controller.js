import Comment from "../models/Comment.module.js";
import { errorHandler } from "../utils/error.js";

const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;
    if (userId != req.user.id) {
      return next(
        errorHandler(403, "You are not allowed to create this comment")
      );
    }

    const newComment = new Comment({
      content,
      postId,
      userId,
    });

    await newComment.save();
  } catch (err) {
    next(err);
  }
};

const getPostComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

const likeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);

    if (!commment) {
      return next(errorHandler(404, "Comment Not Found"));
    }
    const userIndex = comment.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id);
    } else {
      comment.numberOfLikes -= 1;
      comment.likes.splice(userIndex, 1);
    }
    await comment.save();
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
};

export { createComment, getPostComments };

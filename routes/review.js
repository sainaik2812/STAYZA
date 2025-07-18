const express = require("express");
const router = express.Router({mergeParams: true});
const warpAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")

const reviewController = require("../controllers/reviews.js");


//Reviews
//POst Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  warpAsync(reviewController.createReview)
);

//Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  warpAsync(reviewController.destroyReview)
);

module.exports = router;

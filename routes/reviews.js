const express = require("express");
const router = express.Router({mergeParams: true});
const {listingSchema, reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const asyncWrap = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const validateReview = (req,res,next)=>
{
let {error} = reviewSchema.validate(req.body);
    
    if(error)
    {
      throw new ExpressError(400,error);
    }
    else
    {
      next();
    }
};

//Review
router.post("",validateReview,asyncWrap(async(req,res)=>
{
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  listing.reviews.push(newReview);

  await listing.save();
  await newReview.save();

  console.log("review saved");
   req.flash("success","New Review Created");
  res.redirect(`/listings/${listing.id}`);
}));

//delete review route
router.delete("/:reviewid",asyncWrap(async(req,res)=>
{
  let {id,reviewid} = req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});
  await Review.findByIdAndDelete(reviewid);
   req.flash("success","Review Deleted");
  res.redirect(`/listings/${id}`);
}));

module.exports = router;

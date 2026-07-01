const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req,res,next)=>
{
    console.log(req.body);
let {error} = listingSchema.validate(req.body);
    
    if(error)
    {
      throw new ExpressError(400,error);
    }
    else
    {
      next();
    }
};

//Index Route
router.get(
  "/",
  asyncWrap(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

//New Route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
router.get(
  "/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  }),
);

//Create Route
router.post(
  "/",
  validateListing,
  asyncWrap(async (req, res, next) => {
    // try{
    // if(!req.body.listing)
    // {
    //   throw new ExpressError(400,"Client Side Mistake");
    // }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    // try{
    // const newListing = new Listing(req.body.listing);
    // await newListing.save();
    // res.redirect("/listings");
    // }
    // catch(err)
    // {
    //   next(err);
    // }
    // }
    // catch(err)
    // {
    //   throw new ExpressError(400,"your are putting bad request");
    // }
    // }),
  }),
);

//Edit Route
router.get(
  "/:id/edit",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }),
);

//Update Route
router.put(
  "/:id",
  validateListing,
  asyncWrap(async (req, res, next) => {
    try {
      let { id } = req.params;
      await Listing.findByIdAndUpdate(id, { ...req.body.listing });
      res.redirect(`/listings/${id}`);
    } catch (err) {
      throw new ExpressError(400, "client bad request");
    }
  }),
);

//Delete Route
router.delete(
  "/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  }),
);

module.exports = router;

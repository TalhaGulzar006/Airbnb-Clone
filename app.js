const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const asyncWrap = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");
// const WrapAsync = require("./utils/WrapAsync.js");
const review = require("./models/review.js");
const listings = require("./routes/listing.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then((res) => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("Server is working");
});






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

app.use("/listings",listings);



//Review
app.post("/listings/:id/reviews",validateReview,asyncWrap(async(req,res)=>
{

  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  listing.reviews.push(newReview);

  await listing.save();
  await newReview.save();

  console.log("review saved");
  res.redirect(`/listings/${listing.id}`);
}));

//delete review route
app.delete("/listings/:id/reviews/:reviewid",asyncWrap(async(req,res)=>
{
  let {id,reviewid} = req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});
  await Review.findByIdAndDelete(reviewid);
  res.redirect(`/listings/${id}`);

}));



app.all("/*splat",(req, res, next) => {

  next(new ExpressError(404,"file not found"));
});

app.use((err, req, res, next) => {

  let {status=500,message="something went wrong"} = err;
  // res.status(status).send(message);
  res.status(status).render("error.ejs",{message});
});




// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

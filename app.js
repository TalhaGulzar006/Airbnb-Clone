const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const asyncWrap = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const {listingSchema} = require("./schema.js");

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

//Index Route
app.get("/listings", asyncWrap(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id", asyncWrap(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
}));

const validateListing = (req,res,next)=>
{
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

//Create Route
app.post(
  "/listings",
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
}));

//Edit Route
app.get("/listings/:id/edit", asyncWrap(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

//Update Route
app.put("/listings/:id", asyncWrap(async (req, res,next) => {
  try{
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
  }
  catch(err)
  {
    throw new ExpressError(400,"client bad request");
  }
}));

//Delete Route
app.delete("/listings/:id", asyncWrap(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
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

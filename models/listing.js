const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    filename: {
      type: String,
    },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/tower-bridge-silhouetted-against-a-bright-sky-ntPnfs7GKyc",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/tower-bridge-silhouetted-against-a-bright-sky-ntPnfs7GKyc"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://thumbs.cityrealty.com/assets/smart/1004x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg",
        set: (v) => v === "" ? "https://thumbs.cityrealty.com/assets/smart/1004x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg" : v,
    },
    price: Number,
    location: String,
    country: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        },
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

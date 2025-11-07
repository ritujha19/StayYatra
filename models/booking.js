const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    checkin: {
        type: String,
        required: true
    },
    checkout: {
        type: String,
        required: true
    },
    adults: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    children: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    listing: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    toJSON: { virtuals: true }
});

// Virtual property to get total guests
bookingSchema.virtual('totalGuests').get(function() {
    return this.adults + this.children;
});

module.exports = mongoose.model("Booking", bookingSchema);
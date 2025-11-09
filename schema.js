const joi = require("joi");
const listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().required(),
      description: joi.string().required(),
      image: joi.string().allow("", null),
      price: joi.number().required().min(0),
      location: joi.string().required(),
      addons: joi.array().items(joi.string().allow("")).optional(),
    })
    .required(),
});

const reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required().min(1).max(5),
      comment: joi.string().required(),
    })
    .required(),
});

const bookingSchema = joi.object({
  booking: joi
    .object({
      checkin: joi.string().required(),
      checkout: joi.string().required(),
      adults: joi.number().required().min(1),
      children: joi.number().required().min(0),
      price: joi.number().required().min(0),
    })
    .required(),
});

module.exports = { listingSchema, reviewSchema, bookingSchema };

const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
    title: Joi.string().max(30).required(),
    description: Joi.string().email().required(),
    image: Joi.string().allow("",null),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    country: Joi.string().required(),
   
    }).required()
   
});
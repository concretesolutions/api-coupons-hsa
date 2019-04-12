'use strict'

const Joi = require('joi')

module.exports = Joi.array().items(Joi.object(
  {
    id: Joi.string(),
    description: Joi.string(),
    seller: Joi.string(),
    image: Joi.string(),
    expiresAt: Joi.string().isoDate()
  })
  .meta({ className: 'Coupon' })
  .unknown(true)
  .options({ abortEarly: false }))

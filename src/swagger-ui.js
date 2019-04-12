'use strict'

const SwaggerUI = require('hapi-swaggered-ui')

module.exports = {
  plugin: SwaggerUI,
  options: {
    title: 'Coupons API',
    auth: false,
    path: '/docs',
    swaggerOptions: { validatorUrl: null }
  }
}

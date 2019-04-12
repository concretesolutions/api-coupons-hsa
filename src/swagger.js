'use strict'

const Swagger = require('hapi-swaggered')

module.exports = {
  plugin: Swagger,
  options: {
    auth: false,
    tags: [
      {
        name: 'coupons',
        description: 'Coupons Endpoints'
      }
    ],
    tagging: {
      mode: 'tags'
    },
    info: {
      title: 'Coupons API',
      version: 'Coupons API',
      description: 'E-Commerce Coupons Provider'
    }
  }
}

'use strict'

const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Coupons = require('./src/coupons')
const CouponsSchema = require('./src/coupons.schema')
const Swagger = require('./src/swagger')
const SwaggerUi = require('./src/swagger-ui')

const Port = process.env.PORT || 3000
const Server = Hapi.server({ compression: false, port: Port, host: '0.0.0.0' })

Server.route(
  {
    method: 'GET',
    path: '/coupons',
    handler: (request, ctx) => {
      const idx = Math.floor(Math.random() * Math.floor(3))

      if (idx === 2) {
        const dt = Date.now() + 7500

        while (Date.now() < dt) {
          // simulation a unstable service
        }
      }

      return ctx.response(Coupons)
    },
    options: {
      tags: ['api', 'coupons'],
      auth: false,
      response: { schema: CouponsSchema }
    }
  })

Server
  .register([Inert, Vision, Swagger, SwaggerUi])
  .then(() =>
    Server.start()
      .then(() => console.log(`Coupons API is online on port: ${Port}`))
      .catch(console.error))

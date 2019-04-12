'use strict'

module.exports = {
  apps: [
    {
      name: 'api-coupons',
      script: 'index.js',
      instances: 1,
      exec_mode: 'cluster',
      restart_delay: 3000
    }
  ]
}

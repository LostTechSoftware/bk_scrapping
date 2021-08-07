const Coralogix = require('coralogix-logger')

const config = new Coralogix.LoggerConfig({
  applicationName: 'bk-scrapping',
  privateKey: '4a2c84b2-84e5-34c6-c4c6-1c1ee5848ca8',
  subsystemName: process.env.NODE_ENV == true ? 'production' : 'staging',
})

Coralogix.CoralogixLogger.configure(config)

module.exports = Coralogix

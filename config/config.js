process.env.NODE_ENV = process.env.NODE_ENV || 'development'

let config = require('./env/' + process.env.NODE_ENV)

export default config

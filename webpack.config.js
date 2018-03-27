const TARGET = process.env.npm_lifecycle_event
if (TARGET === 'dev' || TARGET === 'dev:server' || !TARGET) {
  module.exports = require('./config/config.dev')
}
if (TARGET === 'build' || TARGET === 'stats') {
  module.exports = require('./config/config.prod')
}

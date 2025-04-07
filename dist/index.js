
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./box-ui.cjs.production.min.js')
} else {
  module.exports = require('./box-ui.cjs.development.js')
}

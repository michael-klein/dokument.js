
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./doocs.cjs.production.min.js')
} else {
  module.exports = require('./doocs.cjs.development.js')
}

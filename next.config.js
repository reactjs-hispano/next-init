require('dotenv').config({ path: '.env.build' })

module.exports = {
  env: {
    META_ENVIRONMENT_EXAMPLE: process.env.META_ENVIRONMENT_EXAMPLE
  }
}

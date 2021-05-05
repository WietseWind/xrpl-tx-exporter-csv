const {app, fields} = require('./app')

// Check if on the CLI
if (process && typeof process.exit == 'function') {
  const account = process.argv.length > 2
    ? process.argv[2]
    : ''

  if (!account.match(/^r[a-zA-Z0-9]{15,}/)) {
    console.log('Specify XRPL account (r...) as argument')
    if (process && typeof process.exit == 'function') {
      process.exit(1)
    }
  }

  app(account, r => {
    console.log(fields.map(f => {
      return typeof r[f] === 'undefined'
        ? ''
        : String(r[f])
    }).join(';'))
  })
}

module.exports = {
  app,
  fields
}

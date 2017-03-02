const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/public/index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))
    const imagesPath = express.static(path.join(__dirname, 'img'))

    app.use('/', publicPath)
    app.use('/img', imagesPath)

    app.get('/', function (_, res) {
      res.sendFile(indexPath)
    })

    return app
  }
}

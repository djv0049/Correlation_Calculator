const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.eot': 'appliaction/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt'
}
http.createServer(function (request, response) {
  let pathname = url.parse(request.url).pathname
  const ext = path.parse(pathname).ext
  console.log("Request for " + pathname + " received.")
  var fileName = pathname.substr(1)
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log(err)
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, {
        'Content-Type': 'text/html'
      })
      response.end(`File ${pathname} not found!`)
      return
    }
    response.writeHead(200, {
      'Content-Type': mimeType[ext]
    })
    response.write(data)
    response.end()
  })
}).listen(8000)
console.log('Server running at localhost:8000/')

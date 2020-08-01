const WebSocketServer = require('ws').Server

const server = new WebSocketServer({port: 9000})  

server.on('connection', conn => {
  console.log("Connection established ", conn)

  conn.on('closed', () => { 
    console.log('Connection closed')
  })
})
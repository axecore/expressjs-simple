require('dotenv').config()
const 
    express = require('express'),
    app = express(),
    port = process.env.APP_PORT || 3000,
    router = require('./router')

// socket server

const   server = require('http').createServer(app),
        io = require('socket.io').listen(server, {cookie: false})

function middlesocket(req, res, next) {
    res.locals.socketjs = io
    next()
}

//

app.use(middlesocket)
app.set('views', './app/views')
app.set('view engine', 'ejs')
app.use(router)

server.listen(process.env.APP_PORT, () => {
    console.log(`app running on port 4100`);
})



const welcome = {
    
    index: async (req, res) => {

        const io = res.locals.socketjs

        io.on('connection', (socket) => {
            console.log('someone connected to socketio')
            socket.on('welcome', msg => { // menerima dari client
                io.emit('welcome', msg) // mengirim ke client
            })
        })

        res.render('pages/index')

    }

}

module.exports = welcome
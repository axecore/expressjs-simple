const
    express = require('express'),
    router = express.Router()

// passing from routes
const welcome = require('./app/routes/Welcome')

//serve route
router.use('/', welcome)


// 404

router.use((req, res) => {

    res.status(404).json({
        msg: 'uppss 404 not found'
    })

})

module.exports = router
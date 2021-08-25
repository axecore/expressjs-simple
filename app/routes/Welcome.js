const 
    express = require('express'),
    router = express.Router()

// from controller
const welcome = require('../controllers/api/WelcomeController')

// passing to route
router.get('/', welcome.index)

module.exports = router
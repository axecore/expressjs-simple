require('dotenv').config()
const 
    express = require('express'),
    app = express(),
    port = process.env.APP_PORT || 3000,
    router = require('./router')


app.set('views', './app/views')
app.set('view engine', 'ejs')
app.use(router)

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
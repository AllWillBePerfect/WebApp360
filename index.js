const express = require("express")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000

const app = express()



app.set('view engine', 'ejs')
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.render('layouts/main.ejs')
})

app.get('/login', (req, res) => {
    res.render('layouts/auth.ejs')
})



async function start () {
    try {
        /*await mongoose.connect('mongodb+srv://user:12341234@cluster0.5vx5r.mongodb.net/myFirstDatabase', {
            useNewUrlParser: true
        })*/
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()




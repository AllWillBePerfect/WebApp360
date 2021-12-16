const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const todoRoutes = require('./routes/todos')

const PORT = 80

const app = express()


const hbs = exphbs.create({
    defaultLayout: "main",
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)

async function start () {
    try {
        await mongoose.connect('mongodb+srv://user:12341234@cluster0.5vx5r.mongodb.net/myFirstDatabase', {
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()




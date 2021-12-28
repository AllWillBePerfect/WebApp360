const express = require("express")
const mongoose = require("mongoose")
const authRouter = require('./routes/authRouter');
const Controller = require("./authController");

const Router = require("express");
const router = new Router();
const controller = require("./authController");

const urlencodedParser = Router.urlencoded({extended: false});



module.exports = router;

const PORT = process.env.PORT || 5000

const app = express()



app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.json());


app.get('/', (req, res) => {
    res.render('layouts/auth.ejs')
})

app.get('/success', (req, res) => {
    res.render('layouts/success.ejs', {
        name: "Vasya"
    })
})

app.get('/unsuccess', (req, res) => {
    res.render('layouts/unsuccess.ejs')
})

app.post("/body", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    controller.login(req, res);
    if (req.body.username == "Vasya") {
        res.redirect('/success');
    }   else {
        res.redirect('/unsuccess');
    }


});

async function start () {
    try {
        await mongoose.connect( process.env.MONGODB || 'mongodb+srv://youmustdefend:lesezo36@cluster0.afs95.mongodb.net/myFirstDatabase', {
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




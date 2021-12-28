const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const Routes = require('./routes/reqRouter')
const authRouter = require('./routes/authRouter');
const Controller = require("./authController");

const PORT = process.env.PORT || 5000

const app = express()

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('views'))
app.use(express.json());

app.use("/auth", authRouter);

app.use(Routes);



const urlencodedParser = express.urlencoded({extended: false});

app.post("/auth.html", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.userName} - ${req.body.userPassword}`);
    Controller.login(req, res);
    });

async function start () {
    try {
        await mongoose.connect('mongodb+srv://youmustdefend:lesezo36@cluster0.afs95.mongodb.net/myFirstDatabase', {
            useNewUrlParser: true
        });
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        });
    } catch (e) {
        console.log(e);
    }
}

start();
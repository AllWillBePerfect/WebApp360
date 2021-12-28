const Router = require("express");
const router = new Router();
const controller = require("../authController");

const urlencodedParser = Router.urlencoded({extended: false});

router.post("/body", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    console.log(999)
    controller.login(req, res);
    console.log(999)
    res.redirect('/success')
});

module.exports = router;
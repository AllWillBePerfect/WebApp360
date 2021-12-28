const Router = require("express");
const router = new Router();
const controller = require("../authController");

const urlencodedParser = Router.urlencoded({extended: false});

router.post("/login", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    controller.login(req, res);
});

module.exports = router;
const User = require("./models/user");
const Role = require("./models/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {secretKey} = require("./config"); 

generateAccessToken = (id, roles) => {
    const payload = {id, roles};
    return jwt.sign(payload, secretKey, {expiresIn: "24h"});
};

class authController {
    async login(req, res) {
        try {
            const username = req.body;
            console.log(username, password);
            const user = await User.findOne({username});
            if (!user) {
                return res.status(400).json({message: `User ${user} is not found`});
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: `Invalid password`});
            }
            const token = generateAccessToken(user._id, user.roles);
            return res.json({token, username});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Login error'});
        }
    }
}

module.exports = new authController();
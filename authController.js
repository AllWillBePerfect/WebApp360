const User = require("./models/user");
const Role = require("./models/role");
const bcrypt = require("bcryptjs");

class authController {
    async registration(req, res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne({username});
            if (candidate)
            {
                return res.status(400).json({message: "User with entered name is already exist"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = Role.findOne({value: "USER"});
            const user = new User({username, password: hashPassword, rolse: [userRole.value]});
            await user.save();
            return res.json({message: "User has been successfully registered!"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Registration error'});
        }
    }
    async login(req, res) {
        try {
            
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Login error'});
        }
    }
    async getUsers(req, res) {
        try {
            res.json("Server is working correct!");
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new authController();
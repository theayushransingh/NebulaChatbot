const User = require("../Models/User")
const jwt = require("jsonwebtoken");
const { comparePassword } = require('../Helpers/auth')
const bcrypt = require('bcrypt')

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await findOne({ email });
        console.log(user)
        const match = await bcrypt.compare(password, user.password)
        console.log(match)

        if (!user) {
            return res.json({
                error: "No User Found with this Email Address!"
            })
        }
        if (match) {
            sign({ email: user.email, firstName: user.firstName, id: user.id }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) {
                    throw err;
                }
                res.cookie('token', token).json(user)
            });
        } else {
            res.json("Invalid Password!");
        }
    } catch (error) {
        console.log(error);
    }

}
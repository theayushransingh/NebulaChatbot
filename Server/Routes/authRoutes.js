const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, signupUser, loginUser, getProfile } = require("../Controllers/authController")

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5174'
    })
)

router.get('/', test);
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router;
const express = require('express')
const router = express.Router();
const login = require("../../app/user/login");
const register = require("../../app/user/register")

router.post('/login', login)
router.post('/register',register);


module.exports = router;

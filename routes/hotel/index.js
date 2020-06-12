const express = require('express')
const router = express.Router();
const AddHotels = require("../../app/hotels/addHotels")
const Rooms = require("../rooms/index")
const passport = require('passport')


router.post('/',passport.authenticate('jwt',{session : false}), AddHotels)
router.use('/',passport.authenticate('jwt',{session : false}), Rooms)


module.exports = router;

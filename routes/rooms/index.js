const express = require('express')
const router = express.Router();
const AddRooms = require("../../app/rooms/add");
const RemoveRooms = require("../../app/rooms/remove");
const CheckInNOut = require("../../app/rooms/checkIn&Out");
const getAvailble = require("../../app/rooms/getAvailble")

router.get('/:hotelId/rooms/available', getAvailble)
router.patch('/:hotelId/rooms/add', AddRooms);
router.patch('/:hotelId/rooms/remove', RemoveRooms);
router.patch('/:hotelId/rooms/:id', CheckInNOut);




module.exports = router;

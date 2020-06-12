const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rooms = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    isAvailable: {
        type: Boolean,
        required: true,
        default: true,
    },
    checkedInUser: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
})

const hotels = new mongoose.Schema({
    ownerId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    rooms: [Rooms]
})


module.exports = mongoose.model('hotels', hotels);
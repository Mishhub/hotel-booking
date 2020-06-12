const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Username is required',
    },
    password: {
        type : String,
        required : true,
    },
})


module.exports = mongoose.model('users', userSchema);
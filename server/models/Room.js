const mongoose = require('mongoose');

const roomschema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    }
})

const Room = mongoose.model('room' , roomschema);

module.exports = Room ;
const mongoose = require('mongoose');
const { Schema } = mongoose;
const StaffSchema = new Schema({
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // access: "Staff"
    // ,
    post: {
        type: String,
        required: true
    },
    class: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('staff', StaffSchema);
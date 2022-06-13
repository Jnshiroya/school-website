const mongoose = require('mongoose');
const { Schema } = mongoose;
const StudentSchema = new Schema({
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
    rollno: {
        type: Number,
        required: true
    },
    class: {
        type: String
    },
    addmission_year:{
        type:Number,
        required:true
    },

    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('student', StudentSchema);
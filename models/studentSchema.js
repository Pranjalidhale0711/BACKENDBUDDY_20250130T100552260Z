const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
{
    name: { 
        type: String,
        required: true,
        unique: false
    },
});

module.exports = mongoose.model('student', studentSchema);

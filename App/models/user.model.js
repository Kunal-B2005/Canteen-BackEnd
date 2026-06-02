let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["manager", "staff"],
    },
    // ADDED THIS BLOCK FOR THE APPROVAL WORKFLOW
    isApproved: {
        type: Boolean,
        default: false
    }
});

let userModel = mongoose.model('User', userSchema);

module.exports = userModel;
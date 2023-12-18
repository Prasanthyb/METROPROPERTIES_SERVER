const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
    property_pic: {
        type: String,
        required: [true, 'Please enter a title']
    },
    pet: {
        type: String,
        required: [true, 'Please enter a title']
    },
    name: {
        type: String,
        required: [true, 'Please enter a color']
    },
    level: {
        type: String,
        required: [true, 'Please enter a color']
    },
    bedroom: {
        type: String,
        required: [true, 'Please enter a color']
    },
    bathroom: {
        type: String,
        required: [true, 'Please enter a color']
    },
    propertytype: {
        type: String,
        required: [true, 'Please enter a color']
    }    
});

const New = mongoose.model('New', NewSchema);

module.exports = New;

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
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

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

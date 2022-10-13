const mongoose = require('mongoose');

// defing a schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
    // enum => validator that checks if a value is in a give array
        enum: ['fruit', 'vegetable', 'dairy']
    }
});

// saving the model to a variable it gives a us a MODEL CLASS
const Product = mongoose.model('Product', productSchema);

// exporting the model so we can acces it in our main JS file
module.exports = Product;
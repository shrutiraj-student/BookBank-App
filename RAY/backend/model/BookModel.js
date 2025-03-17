const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type : String,
            required : true,
            trim: true,
        },
        offer: {
            type: String,
        },
        image: {
            type: String,
            required: true,
        },
    }
)

module.exports = mongoose.model('Book', bookSchema);
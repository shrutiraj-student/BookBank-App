const Book = require('../model/BookModel');

const getAllBooksHandler = async(req, res) => {
    try {
        const bookDetails = await Book.find({});
        res.status(200).json({
            success: true,
            message: "All books retrieved successfully",
            data: bookDetails,
        })
    }
    catch(error) {
        console.log("Error in getAllBooksHandler in bookController.js file ");
        console.warn(error.message);

        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message,
        })
    }
}

const createNewBookHandler = async (req, res) => {
    try {
        // fetch data
        const { author, title, price, category, offer, image } = req.body;
        // validation
        if(!author || !title || !price || !category || !offer || !image) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }
        // create a new book object and store into database
        const newBook = await Book.create({
            author,
            title,
            price,
            category,
            offer,
            image,
        })
        // return response
        res.status(201).json({
            success: true,
            message: "New book created successfully",
            data: newBook,
        })
    }
    catch(error) {
        console.log("Error in createNewBookHandler in bookController.js file ");
        console.warn(error.message);
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message,
        })
    }
}


const getFreeBooksHandler = async (req, res) => {
    try {
        const bookDetails = await Book.find({'offer': 'Free'})
        console.log(bookDetails);

         // return response
         res.status(201).json({
            success: true,
            message: "fetching free books successfully",
            data: bookDetails,
        })        
    }
    catch(error) {
        console.log("Error in getFreeBooksHandler in bookController.js file ");
        console.warn(error.message);
        res.status(500).json({
            success: false,
            message: "server error",
            error: error.message,
        })
    }
}

module.exports = {
    getAllBooksHandler,
    createNewBookHandler,
    getFreeBooksHandler
}
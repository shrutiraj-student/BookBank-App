const express = require('express');
const router = express.Router();


// Importing kar raha huu sab bookControllers
const {getAllBooksHandler, createNewBookHandler, getFreeBooksHandler} = require('../controllers/bookControllers');



// Define kar raha huu all routes koh
router.get("/get-all-books", getAllBooksHandler);
router.post("/post-new-book", createNewBookHandler);
router.get("/get-free-book", getFreeBooksHandler);

// export router
module.exports = router;
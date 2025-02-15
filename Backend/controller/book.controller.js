import Book from "../model/book.modal.js";

export const getBook = async(req,res) => {
    try{
        const book = await Book.find()
        res.status(200).json(book)
    }
    catch(error){
        console.log("Error : ",error)
        res.status(500).json({message : "erroe fetchinf books"});
    }
};
export default {getBook};
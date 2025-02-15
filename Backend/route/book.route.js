import express from 'express';
import { getBook } from '../controller/book.controller';

const router = express.Router();

router.get("/books",getBook);

export default router;
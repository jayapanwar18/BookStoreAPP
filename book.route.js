import express from 'express';
import { getBook } from '../controller/book.controller.js';


const router = express.Router();

// Defining API for Get Books
router.get("/",getBook);

export default router;
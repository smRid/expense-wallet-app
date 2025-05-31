import express from 'express';
import { createTransaction, deleteTransaction, getSummaryByUserId, getTransactionByUserId } from '../controllers/transactionsController.js';

const router = express.Router();

router.get("/:user_Id", getTransactionByUserId )

router.post("/", createTransaction)

router.delete("/:id", deleteTransaction)

router.get("/summary/:userId", getSummaryByUserId)


export default router;
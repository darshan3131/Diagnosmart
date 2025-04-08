import express from 'express';
import { createOrder, processPayment } from '../Controllers/paymentController.js';
import { authenticate } from '../auth/verifyToken.js';

const router = express.Router();

router.post('/create-order', authenticate, createOrder);
router.post('/process', authenticate, processPayment);

export default router;

import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Mock payment system for class project
const mockPayments = new Map();

export const createOrder = async (req, res) => {
    try {
        const { amount } = req.body;
        const orderId = 'ORDER_' + Date.now();
        
        // Store order details in memory
        mockPayments.set(orderId, {
            amount,
            status: 'pending',
            createdAt: new Date(),
            currency: 'INR'
        });

        res.json({
            success: true,
            order: {
                id: orderId,
                amount,
                currency: 'INR'
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating payment order',
            error: error.message
        });
    }
};

export const processPayment = async (req, res) => {
    try {
        const { orderId, paymentMethod } = req.body;
        
        // Simulate payment processing
        const order = mockPayments.get(orderId);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        // Simulate success/failure based on amount (for demo purposes)
        const isSuccess = order.amount <= 10000; // Payments under 10000 INR succeed
        
        if (isSuccess) {
            order.status = 'completed';
            order.paymentMethod = paymentMethod;
            mockPayments.set(orderId, order);

            res.json({
                success: true,
                message: 'Payment processed successfully',
                transaction: {
                    id: 'TXN_' + Date.now(),
                    orderId,
                    amount: order.amount,
                    status: 'completed',
                    paymentMethod
                }
            });
        } else {
            order.status = 'failed';
            mockPayments.set(orderId, order);

            res.status(400).json({
                success: false,
                message: 'Payment failed. Amount too high (demo purpose)',
                orderId
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error processing payment',
            error: error.message
        });
    }
};

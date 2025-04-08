import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/payment';

export const createPaymentOrder = async (amount) => {
    try {
        const response = await axios.post(`${BASE_URL}/create-order`, { amount });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const processPayment = async (orderId, paymentMethod) => {
    try {
        const response = await axios.post(`${BASE_URL}/process`, { orderId, paymentMethod });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Demo payment methods
export const PAYMENT_METHODS = [
    { id: 'card', name: 'Credit/Debit Card' },
    { id: 'upi', name: 'UPI' },
    { id: 'netbanking', name: 'Net Banking' }
];

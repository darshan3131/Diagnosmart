import React, { useState } from 'react';
import { createPaymentOrder, processPayment, PAYMENT_METHODS } from '../services/paymentService';

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('card');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Create order
            const { order } = await createPaymentOrder(parseFloat(amount));
            
            // Process payment
            const result = await processPayment(order.id, selectedMethod);
            
            if (result.success) {
                setSuccess(`Payment successful! Transaction ID: ${result.transaction.id}`);
                setAmount('');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Payment failed. Please try again.');
            console.error('Payment error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Make Payment</h2>
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}
            
            {success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                    {success}
                </div>
            )}

            <form onSubmit={handlePayment} className="space-y-4">
                <div>
                    <label htmlFor="amount" className="block text-gray-700 mb-2">
                        Amount (INR)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter amount"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="paymentMethod" className="block text-gray-700 mb-2">
                        Payment Method
                    </label>
                    <select
                        id="paymentMethod"
                        value={selectedMethod}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    >
                        {PAYMENT_METHODS.map(method => (
                            <option key={method.id} value={method.id}>
                                {method.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        disabled={loading || !amount}
                        className={`w-full py-2 px-4 rounded ${
                            loading || !amount
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        } text-white font-semibold transition duration-200`}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                    <p>Demo Note:</p>
                    <ul className="list-disc pl-5">
                        <li>Payments under ₹10,000 will succeed</li>
                        <li>Payments over ₹10,000 will fail (for demo purposes)</li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Payment;

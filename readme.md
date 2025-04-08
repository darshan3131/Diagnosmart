# Diagnosmart

![Diagnosmart Logo](frontend/public/diagnosmart-logo.svg)

## AI-Powered Healthcare Diagnostics

Diagnosmart is a cutting-edge healthcare platform that leverages artificial intelligence to provide accurate disease predictions and diagnostics. Our system uses advanced machine learning models to analyze patient data and provide insights for various health conditions.

### Features

- Disease Prediction Models:
  - Diabetes
  - Heart Disease
  - Kidney Disease
  - Liver Disease
  - Breast Cancer
  - Symptom Analysis
- Secure User Authentication
- Professional Dashboard
- Appointment Management
- Mock Payment Integration
- Real-time Predictions

### Tech Stack

- Frontend:
  - React.js with Vite
  - TailwindCSS
  - React Router
  - React Toastify
  - Axios

- Backend:
  - Node.js with Express
  - MongoDB with Mongoose
  - JWT Authentication
  - Python Integration for ML Models
  - TensorFlow & Scikit-learn

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/diagnosmart.git
   ```

2. Install dependencies:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. Set up Python environment:
   ```bash
   cd backend
   conda env create -f environment.yml
   conda activate diagnosmart
   ```

4. Start the development servers:
   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd frontend
   npm run dev
   ```

### Environment Variables

Create `.env` files in both frontend and backend directories. Example configurations are provided in `.env.example` files.

### License

MIT License - See LICENSE file for details

### Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.
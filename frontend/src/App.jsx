import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors/Doctors';
import DoctorDetails from './pages/Doctors/DoctorDetails';
import MyAccount from './Dashboard/user-account/MyAccount';
import Dashboard from './Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import DiseasePage from './components/Services/Disease/DiseasePage';
import DiabetesTest from './components/Services/Disease/DiabetesTest';
import HeartDiseaseTest from './components/Services/Disease/HeartDiseaseTest';
import LiverDiseaseTest from './components/Services/Disease/LiverDiseaseTest';
import KidneyDiseaseTest from './components/Services/Disease/KidneyDiseaseTest';
import BreastCancerDiseaseTest from './components/Services/Disease/BreastCancerDiseaseTest';
import MalariaDiseaseTest from './components/Services/Disease/MalariaDiseaseTest';
import PneumoniaDiseaseTest from './components/Services/Disease/PneumoniaDiseaseTest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/disease" element={<DiseasePage />} />
        <Route path="/disease/diabetes" element={<DiabetesTest />} />
        <Route path="/disease/heart" element={<HeartDiseaseTest />} />
        <Route path="/disease/liver" element={<LiverDiseaseTest />} />
        <Route path="/disease/kidney" element={<KidneyDiseaseTest />} />
        <Route path="/disease/breast-cancer" element={<BreastCancerDiseaseTest />} />
        <Route path="/disease/malaria" element={<MalariaDiseaseTest />} />
        <Route path="/disease/pneumonia" element={<PneumoniaDiseaseTest />} />
        
        <Route
          path="/users/profile/me"
          element={
            <ProtectedRoute allowedRoles={['patient']}>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/doctors/profile/me"
          element={
            <ProtectedRoute allowedRoles={['doctor']}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

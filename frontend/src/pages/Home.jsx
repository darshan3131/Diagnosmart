import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsArrowRight, BsHeartPulse } from "react-icons/bs";
import { FaBrain, FaVirus, FaStethoscope, FaHospital } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

const Home = () => {
  const navigate = useNavigate();

  const bookAppointment = async () => {
    toast.success("Find your Doctor");
    navigate("/doctors");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Healthcare Diagnostics
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Diagnosmart uses advanced machine learning to predict and diagnose diseases
                with high accuracy, helping you make informed healthcare decisions.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/predict")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try Prediction
                </button>
                <button
                  onClick={bookAppointment}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/diagnosmart-logo.svg"
                alt="Diagnosmart AI"
                className="w-full max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Disease Prediction Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BsHeartPulse className="w-8 h-8" />,
                title: "Heart Disease",
                description:
                  "Predict heart disease risk using vital signs and medical history",
                link: "/predict/heart",
              },
              {
                icon: <GiMedicines className="w-8 h-8" />,
                title: "Diabetes",
                description:
                  "Early diabetes detection using key health indicators",
                link: "/predict/diabetes",
              },
              {
                icon: <FaHospital className="w-8 h-8" />,
                title: "Kidney Disease",
                description:
                  "Assess kidney function and detect potential issues",
                link: "/predict/kidney",
              },
              {
                icon: <FaVirus className="w-8 h-8" />,
                title: "Liver Disease",
                description:
                  "Analyze liver health markers for early detection",
                link: "/predict/liver",
              },
              {
                icon: <FaBrain className="w-8 h-8" />,
                title: "Breast Cancer",
                description:
                  "Early breast cancer detection using medical imaging",
                link: "/predict/breast-cancer",
              },
              {
                icon: <FaStethoscope className="w-8 h-8" />,
                title: "General Symptoms",
                description:
                  "Analyze symptoms to identify potential health issues",
                link: "/predict/symptoms",
              },
            ].map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Try Now <BsArrowRight className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            How Diagnosmart Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Input Your Data",
                description:
                  "Enter your health metrics and symptoms into our secure platform",
              },
              {
                step: "2",
                title: "AI Analysis",
                description:
                  "Our advanced ML models analyze your data for accurate predictions",
              },
              {
                step: "3",
                title: "Get Results",
                description:
                  "Receive detailed health insights and recommended next steps",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Diagnosmart for their healthcare decisions.
              Get started with our AI-powered diagnostics now.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

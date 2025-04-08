import React from 'react';
import { FaAward, FaUsers, FaLaptopMedical } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Diagnosmart
          </h1>
          <p className="text-xl text-gray-600">
            Revolutionizing healthcare through artificial intelligence and machine learning.
            We're committed to making accurate disease prediction accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="w-8 h-8" />,
                stat: '10,000+',
                label: 'Users Helped',
              },
              {
                icon: <FaAward className="w-8 h-8" />,
                stat: '95%',
                label: 'Prediction Accuracy',
              },
              {
                icon: <FaLaptopMedical className="w-8 h-8" />,
                stat: '6',
                label: 'Disease Models',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {item.stat}
                </h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            At Diagnosmart, we're on a mission to transform healthcare through technology.
            By combining artificial intelligence with medical expertise, we're creating
            a future where early disease detection is accessible, accurate, and affordable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What We Do
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Develop accurate disease prediction models</li>
                <li>• Provide early detection capabilities</li>
                <li>• Support healthcare professionals</li>
                <li>• Empower patients with information</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Values
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Accuracy in predictions</li>
                <li>• Privacy and security</li>
                <li>• Accessibility for all</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Machine Learning',
                description:
                  'Advanced algorithms trained on extensive medical datasets for accurate predictions',
              },
              {
                title: 'Secure Platform',
                description:
                  'State-of-the-art security measures to protect your sensitive health data',
              },
              {
                title: 'Real-time Analysis',
                description:
                  'Instant processing and results delivery for quick healthcare decisions',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img
                src="/diagnosmart-logo.svg"
                alt="Diagnosmart Logo"
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="ml-2 text-xl font-bold">Diagnosmart</span>
            </div>
            <p className="mt-4 text-gray-300">
              Empowering healthcare through AI-driven diagnostics. Our advanced machine
              learning models help predict various diseases with high accuracy,
              supporting better healthcare decisions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/predict/diabetes" className="text-gray-300 hover:text-white">
                  Diabetes Prediction
                </Link>
              </li>
              <li>
                <Link to="/predict/heart" className="text-gray-300 hover:text-white">
                  Heart Disease Prediction
                </Link>
              </li>
              <li>
                <Link to="/predict/kidney" className="text-gray-300 hover:text-white">
                  Kidney Disease Prediction
                </Link>
              </li>
              <li>
                <Link to="/predict/liver" className="text-gray-300 hover:text-white">
                  Liver Disease Prediction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} Diagnosmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

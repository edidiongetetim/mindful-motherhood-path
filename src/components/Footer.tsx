
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WellNest
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Your AI-powered companion for pregnancy & postpartum mind and body wellness. 
              Track how you feel and listen to your body with personalized care.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@wellnest.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                1-800-WELLNEST
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-purple-600">Services</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-purple-600">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-600 hover:text-purple-600">Help Center</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-purple-600">Terms of Service</Link></li>
              <li><Link to="/emergency" className="text-gray-600 hover:text-purple-600">Emergency Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2024 WellNest. All rights reserved. | Birth & Beyond
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This platform is for informational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

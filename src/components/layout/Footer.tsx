import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            to="/terms-of-service" // Placeholder, as not defined in App.tsx, but using a plausible path
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy" // Placeholder, as not defined in App.tsx, but using a plausible path
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact-us" // Placeholder, as not defined in App.tsx, but using a plausible path
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} Your Application Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RegistrationForm from '@/components/RegistrationForm';

// shadcn/ui Components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react'; // Icon for Alert

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header appName="AuthFlow App" />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-12">
        <section className="w-full max-w-md space-y-8">
          {/* Optional: A page-level alert if needed, distinct from form-specific toasts */}
          {/* 
          <Alert variant="default">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Welcome to the registration page. Fill out the form below to create your account.
            </AlertDescription>
          </Alert>
          */}

          <RegistrationForm />
          
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/" className="font-medium text-primary hover:underline dark:text-primary-foreground">
              Log in here
            </Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
import React from 'react';
import Header from '@/components/layout/Header'; // Custom component
import LoginForm from '@/components/LoginForm'; // Custom component
import Footer from '@/components/layout/Footer'; // Custom component
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // shadcn/ui
import { Terminal } from 'lucide-react'; // Icon for Alert

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header appName="AuthFlow App" />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md space-y-6">
          {/* 
            Page-level alert as per layout_info. 
            The LoginForm itself handles specific form validation errors and success/error toasts.
            This Alert can be used for more general page-level notifications.
          */}
          <Alert className="border-blue-500 text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">
            <Terminal className="h-4 w-4 text-blue-500 dark:text-blue-400" />
            <AlertTitle className="font-semibold">Welcome!</AlertTitle>
            <AlertDescription>
              Please enter your credentials to access your account. For demo purposes, any email/password will show a "Login Attempted" toast.
            </AlertDescription>
          </Alert>

          <LoginForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
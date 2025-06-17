import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, Mail } from 'lucide-react'; // Mail might be used by ForgotPasswordForm internally

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header appName="AuthFlow App" />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-12 md:py-16">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold">Forgot Your Password?</CardTitle>
            <CardDescription className="text-muted-foreground pt-1">
              No problem! Enter your email address below, and we&apos;ll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert variant="default" className="bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-700 dark:text-blue-300">Check Your Inbox</AlertTitle>
              <AlertDescription className="text-blue-600 dark:text-blue-400">
                If an account with your email exists, a reset link will be sent. Please also check your spam folder.
              </AlertDescription>
            </Alert>
            <ForgotPasswordForm />
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center pt-6">
            <p className="text-sm text-muted-foreground">
              Remembered your password?{' '}
              <Button variant="link" asChild className="p-0 h-auto font-medium text-primary hover:underline">
                <Link to="/">Back to Login</Link> {/* Path from App.tsx */}
              </Button>
            </p>
          </CardFooter>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;

// Helper components (if needed, though standard Button from shadcn is used above)
// We rely on shadcn/ui Button, so explicit import for Button for the Link is below
import { Button } from '@/components/ui/button';
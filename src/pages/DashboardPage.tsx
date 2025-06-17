import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area'; // Added for potentially long content

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
      <Header appName="AuthFlow Dashboard" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="hidden md:flex" /> {/* Hide sidebar on small screens, Header provides dashboard link */}
        <ScrollArea className="flex-1">
          <main className="p-4 sm:p-6 lg:p-8">
            {/* Welcome Section */}
            <section className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Welcome, User!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                This is your personal dashboard. Manage your account and explore features.
              </p>
            </section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="shadow-lg dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">Profile Overview</CardTitle>
                  <CardDescription className="dark:text-gray-300">Your basic account details.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.pravatar.cc/150?u=exampleuser" alt="User Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold text-center dark:text-white">Jane Doe</p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 text-center">jane.doe@example.com</p>
                  </div>
                  <Button variant="outline" className="w-full dark:text-white dark:border-gray-500 dark:hover:bg-gray-600" asChild>
                    {/* The Sidebar component also links to /profile, this is just an example for the card */}
                    <Link to="/profile">View Full Profile</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions Card */}
              <Card className="shadow-lg dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">Quick Actions</CardTitle>
                  <CardDescription className="dark:text-gray-300">Access common features quickly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full dark:bg-primary dark:hover:bg-primary/90" asChild>
                    {/* The Sidebar component also links to /settings */}
                    <Link to="/settings">Account Settings</Link>
                  </Button>
                  <Button variant="secondary" className="w-full dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80" asChild>
                    <Link to="/landing">Visit Landing Page</Link> {/* Path from App.tsx */}
                  </Button>
                  <Button variant="ghost" className="w-full dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                    View Notifications (Coming Soon)
                  </Button>
                </CardContent>
              </Card>

              {/* Placeholder Content Card */}
              <Card className="shadow-lg dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">Activity Feed</CardTitle>
                  <CardDescription className="dark:text-gray-300">Recent activities in your account.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>- Logged in successfully.</li>
                    <li>- Updated profile picture.</li>
                    <li>- Viewed terms of service.</li>
                    <li>- More activity items...</li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto mt-2 dark:text-blue-400 dark:hover:text-blue-300">
                    View all activity
                  </Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </ScrollArea>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
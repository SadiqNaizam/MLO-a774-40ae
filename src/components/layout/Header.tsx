import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  appName?: string;
}

const Header: React.FC<HeaderProps> = ({ appName = "AuthFlow App" }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log('Header loaded on path:', currentPath);

  const isAuthPage = ['/', '/registration', '/forgot-password'].includes(currentPath);
  const isLandingPage = currentPath === '/landing';
  const isDashboardPage = currentPath === '/dashboard';

  const handleLogout = () => {
    console.log("Logout action triggered");
    // Here you would typically clear auth state and redirect
    // For now, we'll just log and potentially navigate to login
    // navigate('/'); // Example, requires useNavigate
    alert("Logout functionality placeholder: User would be logged out.");
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and App Name */}
        <Link to={isDashboardPage ? "/dashboard" : "/landing"} className="flex items-center space-x-2 text-xl font-semibold hover:text-primary transition-colors">
          <Sparkles className="h-7 w-7 text-primary" />
          <span>{appName}</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-2 sm:space-x-4">
          {isAuthPage && (
            <p className="text-sm text-muted-foreground hidden sm:block">Secure Access Portal</p>
          )}

          {isLandingPage && (
            <>
              <Button variant="ghost" asChild>
                <Link to="/">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/registration">Sign Up</Link>
              </Button>
            </>
          )}

          {isDashboardPage && (
            <>
              <Button variant={currentPath === "/dashboard" ? "secondary" : "ghost"} asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/landing">Home</Link>
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
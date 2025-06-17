import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Rocket, ShieldCheck, Users } from 'lucide-react';

const LandingPage = () => {
  console.log('LandingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      <Header appName="AuthFlow App" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80')"}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black bg-opacity-50 p-10 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Welcome to <span className="text-primary">AuthFlow App</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200">
              Your secure and intuitive gateway to seamless application access. Experience hassle-free authentication and robust security.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/">Login to Your Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/registration">Create New Account</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Navigation Menu - can be used for secondary navigation or quick links */}
        <section className="py-6 bg-background border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/features"> {/* Placeholder path, not in App.tsx */}
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Features
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                             <Link to="/about"> {/* Placeholder path, not in App.tsx */}
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/"> {/* Route from App.tsx */}
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Login
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/registration"> {/* Route from App.tsx */}
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Sign Up
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose AuthFlow?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-primary rounded-full text-primary-foreground mb-3">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Fast & Easy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Get started in minutes with our streamlined login and registration process. No complicated steps, just quick access.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                   <div className="p-3 bg-primary rounded-full text-primary-foreground mb-3">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Secure Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Protect your account with industry-standard security practices, ensuring your data is safe.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-primary rounded-full text-primary-foreground mb-3">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">User Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    An intuitive interface designed for a smooth and pleasant user experience across all devices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Join thousands of users who trust AuthFlow for secure and easy access.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-primary bg-primary-foreground hover:bg-primary-foreground/90">
              <Link to="/registration">Sign Up for Free</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
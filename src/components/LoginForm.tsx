import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, LogIn } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  rememberMe: z.boolean().default(false).optional(),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate(); // For potential redirection on successful login

  console.log('LoginForm loaded');

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login form submitted:', data);
    // Simulate API call
    toast({
      title: "Login Attempted",
      description: `Email: ${data.email}, Remember Me: ${data.rememberMe}`,
    });
    // For a real application, you would handle authentication here
    // and navigate on success, e.g.:
    // if (loginSuccessful) {
    //   navigate('/dashboard');
    // } else {
    //   form.setError("root", { type: "manual", message: "Invalid email or password." });
    // }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Access your account to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="rememberMe"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel htmlFor="rememberMe" className="cursor-pointer">
                        Remember me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {form.formState.errors.root && (
              <p className="text-sm font-medium text-destructive">
                {form.formState.errors.root.message}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2 pt-4">
        <div className="text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link
            to="/registration"
            className="font-medium text-primary hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LayoutDashboard, User, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a cn utility

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  console.log('Sidebar loaded');
  const navigate = useNavigate();

  const navItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
    },
    {
      label: 'Profile',
      icon: User,
      href: '/profile', // Placeholder: This route is not in App.tsx
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/settings', // Placeholder: This route is not in App.tsx
    },
  ];

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement actual logout logic here
    // For now, navigate to login page as an example
    navigate('/');
  };

  return (
    <aside className={cn("h-screen w-64 bg-gray-50 border-r flex flex-col", className)}>
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">AppLogo</h2>
        {/* Or use an actual logo component/image here */}
      </div>
      <nav className="flex-grow p-4 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            asChild
          >
            <Link to={item.href}>
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
      <div className="p-4 mt-auto border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
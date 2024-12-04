import React, { useState } from 'react';
import Navigation from './Navigation';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DashboardLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Hamburger menu button for mobile */}
      <Button
        variant="ghost"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar navigation */}
      <aside className={`
        fixed md:static w-64 bg-white shadow-md h-screen z-40 transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <Navigation />
      </aside>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 md:ml-0 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
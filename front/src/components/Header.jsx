import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo and Navigation */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <img src="/placeholder.svg" alt="NJSS Logo" className="h-8 w-auto" />
            <nav className="overflow-x-auto">
              <ul className="flex gap-4 text-sm whitespace-nowrap">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">入札案件を探す</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">落札案件を探す</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">特定企業を探す</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">発注機関を探す</a></li>
              </ul>
            </nav>
          </div>

          {/* Search and User */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 md:w-64 md:flex-none">
              <Input 
                type="text" 
                placeholder="例）清掃、管理、派遣など" 
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <Button 
              variant="ghost" 
              className="text-gray-500 hover:text-gray-700 text-sm whitespace-nowrap hidden md:inline-flex"
            >
              検索履歴/落札企業ランキング
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>杉本</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
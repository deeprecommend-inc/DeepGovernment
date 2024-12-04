import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Search, 
  FileText, 
  Settings, 
  HelpCircle, 
  Mail, 
  Lock, 
  MessageSquare, 
  LogOut 
} from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="p-4 pt-16 md:pt-4">
      <ul className="space-y-2">
        <li>
          <Link to="/">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/' ? 'bg-accent' : ''}`}
            >
              <Home className="mr-2 h-4 w-4" /> マイページ
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/search' ? 'bg-accent' : ''}`}
            >
              <Search className="mr-2 h-4 w-4" /> 検索条件一覧
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/bids">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/bids' ? 'bg-accent' : ''}`}
            >
              <FileText className="mr-2 h-4 w-4" /> 入札案件管理
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/settings' ? 'bg-accent' : ''}`}
            >
              <Settings className="mr-2 h-4 w-4" /> 詳細設定
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/help">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/help' ? 'bg-accent' : ''}`}
            >
              <HelpCircle className="mr-2 h-4 w-4" /> ヘルプ
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/change-email">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/change-email' ? 'bg-accent' : ''}`}
            >
              <Mail className="mr-2 h-4 w-4" /> メールアドレスの変更
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/change-password">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/change-password' ? 'bg-accent' : ''}`}
            >
              <Lock className="mr-2 h-4 w-4" /> パスワードの変更
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${location.pathname === '/contact' ? 'bg-accent' : ''}`}
            >
              <MessageSquare className="mr-2 h-4 w-4" /> お問い合わせ
            </Button>
          </Link>
        </li>
        <li>
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" /> ログアウト
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
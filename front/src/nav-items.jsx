import { HomeIcon, SearchIcon, FileTextIcon, SettingsIcon, HelpCircleIcon, MailIcon, LockIcon, MessageSquareIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Search from "./pages/Search.jsx";
import Bids from "./pages/Bids.jsx";
import Settings from "./pages/Settings.jsx";
import Help from "./pages/Help.jsx";
import ChangeEmail from "./pages/ChangeEmail.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Contact from "./pages/Contact.jsx";

export const navItems = [
  {
    title: "マイページ",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "検索条件一覧",
    to: "/search",
    icon: <SearchIcon className="h-4 w-4" />,
    page: <Search />,
  },
  {
    title: "入札案件管理",
    to: "/bids",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <Bids />,
  },
  {
    title: "詳細設定",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <Settings />,
  },
  {
    title: "ヘルプ",
    to: "/help",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <Help />,
  },
  {
    title: "メールアドレスの変更",
    to: "/change-email",
    icon: <MailIcon className="h-4 w-4" />,
    page: <ChangeEmail />,
  },
  {
    title: "パスワードの変更",
    to: "/change-password",
    icon: <LockIcon className="h-4 w-4" />,
    page: <ChangePassword />,
  },
  {
    title: "お問い合わせ",
    to: "/contact",
    icon: <MessageSquareIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];
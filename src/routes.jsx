import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  WalletIcon,
  ArrowLeftOnRectangleIcon,
  ArrowPathRoundedSquareIcon
} from "@heroicons/react/24/solid";
import {
  Home,
  Profile,
  Tables,
  Notifications,
  CrowdFunding,
  AssetManagement,
  MarketPlace,
} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Doc from "./pages/dashboard/doc";
import Portfolio from "./pages/dashboard/portfolio";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <WalletIcon {...icon} />,
        name: "Portfolio",
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        icon: <CurrencyRupeeIcon {...icon} />,
        name: "Crowd Funding",
        path: "/crowdfunding",
        element: <CrowdFunding />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "Help Guide",
        path: "/guide",
        element: <Doc />,
      },
      {
        icon: <ArrowPathRoundedSquareIcon {...icon} />,
        name: "Asset Management",
        path: "/asset-management",
        element: <AssetManagement />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Marketplace",
        path: "/marketplace",
        element: <MarketPlace />,
      },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "notifactions",
      //   path: "/notifactions",
      //   element: <Notifications />,
      // },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "sign out",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export const signUpRoute = [
  {
    layout: "auth",
    pages: [
      // {
      //   icon: <ArrowLeftOnRectangleIcon {...icon} />,
      //   name: "sign out",
      //   path: "/sign-in",
      //   element: <SignIn />,
      // },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;

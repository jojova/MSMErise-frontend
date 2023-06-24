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
} from "@heroicons/react/24/solid";
import {
  Home,
  Profile,
  Tables,
  Notifications,
  CrowdFunding,
  AssetManagement,
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
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        icon: <ShoppingBagIcon {...icon} />,
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
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "Help Guide",
        path: "/guide",
        element: <Doc />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "Asset Management",
        path: "/asset-management",
        element: <AssetManagement />,
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
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
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

import React from "react";
import { INavItem } from "../@interfaces";
import {
  FiArrowLeft,
  FiBarChart2,
  FiCheckSquare,
  FiHome,
  FiLayers,
  FiSettings,
  FiFlag,
  FiMapPin,
} from "react-icons/fi";

const Home = FiHome as React.FC<any>;
const Layers = FiLayers as React.FC<any>;
const Settings = FiSettings as React.FC<any>;
const Flag = FiFlag as React.FC<any>;
const MapPin = FiMapPin as React.FC<any>;
const CheckSquare = FiCheckSquare as React.FC<any>;
const BarChart = FiBarChart2 as React.FC<any>;
const ArrowLeft = FiArrowLeft as React.FC<any>;

export const navItemsTop: INavItem[] = [
  {
    order: 0,
    path: "home",
    label: "Home",
    icon: <Home />,
  },
  {
    order: 1,
    path: "dashboard",
    label: "Dashboard",
    icon: <BarChart />,
    subItems: [
      {
        order: 0,
        path: "analytics",
        label: "Analytics",
      },
      {
        order: 1,
        path: "apps",
        label: "Apps",
      },
      {
        order: 2,
        path: "learn",
        label: "Learn",
      },
    ],
  },
  {
    order: 2,
    path: "projects",
    label: "Projects",
    icon: <Layers />,
  },
  {
    order: 3,
    path: "tasks",
    label: "Tasks",
    icon: <CheckSquare />,
  },
  {
    order: 4,
    path: "reporting",
    label: "Reporting",
    icon: <Flag />,
  },
  {
    order: 5,
    path: "rentals",
    label: "Rentals",
    icon: <MapPin />,
    subItems: [
      {
        order: 0,
        path: "all",
        label: "All rentals",
      },
      {
        order: 1,
        path: "popular",
        label: "Popular",
      },
      {
        order: 2,
        path: "recent",
        label: "Recently added",
      },
    ],
  },
];

export const navItemsBottom: INavItem[] = [
  {
    order: 0,
    path: "settings",
    label: "Settings",
    icon: <Settings />,
  },
  {
    order: 1,
    label: "Close Navbar",
    icon: <ArrowLeft />,
    toggleSidebar: true,
  },
];

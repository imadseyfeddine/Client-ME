import {
    PresentationChartBarIcon,
    Cog6ToothIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";

export const sideBarItems = [
    {
      itemName: 'Prospection',
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      subItems: ['téléprospection', 'prospection'],
    },
    {
      itemName: 'UserManagement',
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      subItems: [],
    },
    {
      itemName: 'LogOut',
      icon: <PowerIcon className="h-5 w-5" />,
      subItems: [],
    },
  ];
  
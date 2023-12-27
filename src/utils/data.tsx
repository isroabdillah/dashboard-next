import {
  DashboardIcon,
  AlertIcon,
  BadgeIcon,
  ButtonIcon,
  CardIcon,
  ChartIcon,
  WidgetIcon,
  FormIcon,
  TableIcon,
  DropdownIcon,
  SpinnerIcon,
  ModalIcon,
  NavbarIcon,
  LoginIcon,
} from "@/components/icons";

let column = [
  {
    name: "",
  },
  {
    name: "receiver",
  },
  {
    name: "user status",
  },
  {
    name: "message",
  },
  {
    name: "status",
  },
];

let isi = [
  {
    nama: "Isro Abdillah",
    phone: "0813175714",
    userStatus: "active",
    lastLogin: "14/DEC/2023",
    message: "lorem ipsum isro ganteng",
    status: "terkirim",
  },
  {
    nama: "Isro Abdillah",
    phone: "0813175714",
    userStatus: "nonactive",
    lastLogin: "14/DEC/2023",
    message: "lorem ipsum ",
    status: "terkirim",
  },
];

const menus = [
  {
    id: 1,
    name: "dashboard",
    url: "/dashboard",
    icon: <DashboardIcon />,
    type: "pages",
    child: [],
  },
  {
    id: 2,
    name: "settings",
    url: "#",
    icon: <SpinnerIcon />,
    type: "pages",
    child: [
      {
        name: "role",
        url: "/settings/role",
        icon: <DropdownIcon />,
      },
      {
        name: "menu",
        url: "/settings/menu",
        icon: <DropdownIcon />,
      },
      {
        name: "system",
        url: "/settings/system",
        icon: <DropdownIcon />,
      },
    ],
  },
  {
    id: 3,
    name: "widget",
    url: "/widget",
    type: "components",
    icon: <WidgetIcon />,
  },
  {
    id: 4,
    name: "chart js",
    url: "/chart",
    type: "components",
    icon: <ChartIcon />,
  },
  {
    id: 5,
    name: "button",
    url: "/button",
    type: "components",
    icon: <ButtonIcon />,
  },
  {
    id: 6,
    name: "toast",
    url: "/toast",
    type: "components",
    icon: <AlertIcon />,
  },
  {
    id: 7,
    name: "table",
    url: "/table",
    type: "components",
    icon: <TableIcon />,
  },
  {
    id: 8,
    name: "card",
    url: "/card",
    type: "components",
    icon: <CardIcon />,
  },
  {
    id: 9,
    name: "form",
    url: "/form",
    type: "components",
    icon: <FormIcon />,
  },
  {
    id: 10,
    name: "tabs",
    url: "/tabs",
    type: "components",
    icon: <BadgeIcon />,
  },  
  {
    id: 11,
    name: "alerts",
    url: "/alerts",
    type: "components",
    icon: <AlertIcon />,
  }, 
  {
    id: 12,
    name: "modals",
    url: "/modals",
    type: "components",
    icon: <ModalIcon />,
  },
  {
    id: 13,
    name: "navbar",
    url: "/navbar",
    type: "components",
    icon: <NavbarIcon />,
  },
  {
    id: 14,
    name: "dropdowns",
    url: "/dropdowns",
    type: "components",
    icon: <DropdownIcon />,
  },
  {
    id: 14,
    name: "spinner",
    url: "/spinner",
    type: "components",
    icon: <SpinnerIcon />,
  },
  {
    id: 14,
    name: "login",
    url: "/login",
    type: "components",
    icon: <LoginIcon />,
  },
];

export { column, isi, menus };
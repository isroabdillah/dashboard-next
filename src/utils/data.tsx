import {
  LuLayoutDashboard,
  LuLayers,
  LuAreaChart,
  LuHand,
  LuSendToBack,
  LuShapes,
  LuSheet,
  LuFormInput,
} from "react-icons/lu";

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
    icon: <LuLayoutDashboard size="20" />,
  },
  {
    id: 2,
    name: "widget",
    url: "/widget",
    icon: <LuLayers size="20" />,
  },
  {
    id: 3,
    name: "chart js",
    url: "/chart",
    icon: <LuAreaChart size="20" />,
  },
  {
    id: 4,
    name: "button",
    url: "/button",
    icon: <LuHand size="20" />,
  },
  {
    id: 5,
    name: "toast",
    url: "/toast",
    icon: <LuSendToBack size="20" />,
  },
  {
    id: 6,
    name: "table",
    url: "/table",
    icon: <LuSheet size="20" />,
  },
  {
    id: 7,
    name: "card",
    url: "/card",
    icon: <LuShapes size="20" />,
  },
  {
    id: 8,
    name: "form",
    url: "/form",
    icon: <LuFormInput size="20" />,
  },
];

export { column, isi, menus };
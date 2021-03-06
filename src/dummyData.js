import {
  AttachMoney,
  BarChart,
  DynamicFeed,
  LineStyle,
  MailOutline,
  ManageAccounts,
  PersonOutline,
  Storefront,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import pic1 from "./assets/0.png";
import pic2 from "./assets/01.png";
import pic3 from "./assets/02.png";
import pic4 from "./assets/03.png";
import pic5 from "./assets/04.png";
import pic6 from "./assets/05.png";
import pic7 from "./assets/06.png";
import pic8 from "./assets/07.png";
import pic9 from "./assets/08.png";
import pic10 from "./assets/09.png";
export const dashboard = [
  { title: "Home", Icon: LineStyle, directory: "/" },
  { title: "Analytics", Icon: Timeline, directory: "/analytics" },
  { title: "Sales", Icon: TrendingUp, directory: "/sales" },
];
export const quickmenu = [
  { title: "Users", Icon: PersonOutline, directory: "/users" },
  { title: "Products", Icon: Storefront, directory: "/products" },
  { title: "Transactions", Icon: AttachMoney, directory: "/transactions" },
  { title: "Reports", Icon: BarChart, directory: "/reports" },
];
export const notificaions = [
  { title: "Mail", Icon: MailOutline, directory: "/mail" },
  { title: "Feedback", Icon: DynamicFeed, directory: "/feedback" },
  { title: "Messages", Icon: MailOutline, directory: "/messages" },
];
export const staff = [
  { title: "Manage", Icon: ManageAccounts, directory: "/manage" },
  { title: "Analytics", Icon: Timeline, directory: "/analytics" },
  { title: "Reports", Icon: BarChart, directory: "/reports" },
];

export const card__data = [
  {
    id: 1,
    title: "revanue",
    amount: 2415,
    status: "loss",
    profit: -22,
  },
  {
    id: 2,
    title: "sales",
    amount: 44345,
    status: "loss",
    profit: -57,
  },
  {
    id: 3,
    title: "cost",
    amount: 74384,
    status: "profit",
    profit: +43,
  },
];
export const chart_data = [
  {
    name: "jan",
    "Active Users": 5,
  },
  {
    name: "feb",
    "Active Users": 200,
  },
  {
    name: "mar",
    "Active Users": 600,
  },
  {
    name: "apr",
    "Active Users": 7000,
  },
  {
    name: "jun",
    "Active Users": 5000,
  },
  {
    name: "jul",
    "Active Users": 2300,
  },
  {
    name: "aug",
    "Active Users": 2893,
  },
  {
    name: "sep",
    "Active Users": 543,
  },
  {
    name: "oct",
    "Active Users": 8000,
  },
  {
    name: "nov",
    "Active Users": 4373,
  },
  {
    name: "dec",
    "Active Users": 8934,
  },
];
export const user__data = [
  {
    id: 1,
    name: "jago musa",
    image: pic1,
    title: "software engineer",
    date: "22 jun 2022",
    amount: "$234",
    status: "pending",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 2,
    name: "amos jojo",
    image: pic2,
    title: "software hacker",
    date: "21 dec 2100",
    amount: "$8,945",
    status: "declined",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 3,
    name: "dracu jumangi",
    image: pic3,
    title: "software distroyer",
    date: "01 aug 2043",
    amount: "$900",
    status: " approved",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 4,
    name: "wasihu gyang",
    image: pic4,
    title: "indomin tester",
    date: "9 sep 2050",
    amount: "$437,438",
    status: "pending",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 5,
    name: "don jago",
    image: pic5,
    title: "j.t.f commandan ",
    date: "1 jan 2022",
    amount: "$2,000",
    status: "declined",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 6,
    name: "lama skiru",
    image: pic6,
    title: "smiley face",
    date: "7 jul 2021",
    amount: "$3,455",
    status: "approved",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 7,
    name: "bunnie face",
    image: pic7,
    title: "smiley face",
    date: "7 jul 2021",
    amount: "$5,474",
    status: "approved",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 8,
    name: "jet li",
    image: pic8,
    title: "q & a tester",
    date: "8 jul 2021",
    amount: "$475",
    status: "declined",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 9,
    name: "ice king",
    image: pic9,
    title: "cnc programmer",
    date: "9 jul 2021",
    amount: "$565",
    status: "approved",
    active: "active",
    email: "musa@gmail.com",
  },
  {
    id: 10,
    name: "black hat",
    image: pic10,
    title: "hacker",
    date: "10 jul 2021",
    amount: "$556",
    status: "pending",
    active: "active",
    email: "musa@gmail.com",
  },
];

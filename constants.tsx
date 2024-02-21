import {
  DashboardIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { FooterItem, SideBarItem } from "./types";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { BiUser } from "react-icons/bi";

export const sideBar: SideBarItem[] = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon width={24} height={24} />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard",
  },
  {
    name: "users",
    label: "Users",
    icon: <BiUser width={24} height={24} />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/dashboard/users",
  },
];

export const links: FooterItem[] = [
  { name: "Facebook", ref: "/", icon: <FaFacebook /> },
  { name: "Instagram", ref: "/", icon: <FaInstagram /> },
  { name: "Twitter", ref: "/", icon: <FaTwitter /> },
  { name: "GitHub", ref: "/", icon: <FaGithub /> },
  { name: "Site", ref: "/", icon: <FaGlobe /> },
];

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

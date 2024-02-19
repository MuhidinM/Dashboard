import { DashboardIcon } from "@radix-ui/react-icons";
import { FooterItem, SideBarItem } from "./types";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobe,
  FaPeopleArrows,
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
    path: "/users",
  },
];

export const links: FooterItem[] = [
  { name: "Facebook", ref: "/", icon: <FaFacebook /> },
  { name: "Instagram", ref: "/", icon: <FaInstagram /> },
  { name: "Twitter", ref: "/", icon: <FaTwitter /> },
  { name: "GitHub", ref: "/", icon: <FaGithub /> },
  { name: "Site", ref: "/", icon: <FaGlobe /> },
];

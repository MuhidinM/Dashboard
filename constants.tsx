import { DashboardIcon } from "@radix-ui/react-icons";
import { FooterItem, SideBarItem } from "./types";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

export const sideBar: SideBarItem[] = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon width={24} height={24} />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/merchants",
    active: "/merchants",
  },
];

export const links: FooterItem[] = [
  { name: "Facebook", ref: "/", icon: <FaFacebook /> },
  { name: "Instagram", ref: "/", icon: <FaInstagram /> },
  { name: "Twitter", ref: "/", icon: <FaTwitter /> },
  { name: "GitHub", ref: "/", icon: <FaGithub /> },
  { name: "Site", ref: "/", icon: <FaGlobe /> },
];

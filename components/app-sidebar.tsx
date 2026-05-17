"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  MdDashboard,
  MdAnalytics,
  MdSecurity,
} from "react-icons/md";

import { FaCamera, FaUsers, FaBook } from "react-icons/fa";

import { HiClipboardDocumentList } from "react-icons/hi2";

import { BsRobot } from "react-icons/bs";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: MdDashboard,
  },
  {
    title: "Attendance Sheet",
    href: "/attendance-sheet",
    icon: HiClipboardDocumentList,
  },
  {
    title: "Live Camera",
    href: "/live-camera",
    icon: FaCamera,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: MdAnalytics,
  },
  {
    title: "User Management",
    href: "/user-management",
    icon: FaUsers,
  },
  {
    title: "AI Insights",
    href: "/ai-insights",
    icon: BsRobot,
  },
  {
    title: "Security",
    href: "/security",
    icon: MdSecurity,
  },
  {
    title: "Journal",
    href: "/journal",
    icon: FaBook,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#2C2C31] font-michroma border-r-4 border-r-gray-300">
      <SidebarHeader className="flex flex-row bg-[#2C2C31] p-4 justify-center items-center gap-3 border-b-white border-b-2">
        <Image
          src="/images/logo1_bg.png"
          alt="VisionID Logo"
          width={80}
          height={80}
          priority
          className="rounded-full"
        />

        <div className="text-white">
          <h1 className="text-lg">VisionID</h1>

          <p className="text-[10px] text-gray-300">
            NeuroBridge Technologies
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#2C2C31] px-3 py-4">
        <SidebarGroup className="space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.title}
                href={link.href}
                className="
                  flex items-center gap-3
                  rounded-xl
                  px-4 py-3
                  text-sm text-gray-200
                  transition-all duration-200
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Icon className="text-xl" />

                <span>{link.title}</span>
              </Link>
            );
          })}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-[#2C2C31] p-4 text-xs text-gray-400">
        VisionID System v1.0
      </SidebarFooter>
    </Sidebar>
  );
}
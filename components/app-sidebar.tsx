"use client";

import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { MdDashboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaCamera, FaUsers, FaBook } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { HiClipboardDocumentList } from "react-icons/hi2";

import { BsRobot } from "react-icons/bs";

const sidebarLinks = [
  { title: "Live Camera", key: "live-camera", icon: FaCamera },
  { title: "Attendance Sheet", key: "attendance", icon: BsPeopleFill },
  // {
  //   title: "Attendance Sheet",
  //   key: "attendance",
  //   icon: HiClipboardDocumentList,
  // },

  // { title: "Analytics", key: "analytics", icon: MdAnalytics },
  // { title: "User Management", key: "users", icon: FaUsers },
  // { title: "AI Insights", key: "ai", icon: BsRobot },
  // { title: "Security", key: "security", icon: MdSecurity },
  { title: "Journal", key: "journal", icon: FaBook },
];

type AppSidebarProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export function AppSidebar({
  activeTab = "live-camera",
  setActiveTab,
}: AppSidebarProps) {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const name = localStorage.getItem("name") || "Unknown User";
    const email = localStorage.getItem("email") || "No Email";

    setUser({
      name,
      email,
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    router.push("/authentication");
  };
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

          <p className="text-[10px] text-gray-300">NeuroBridge Technologies</p>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#2C2C31] py-4">
        <SidebarGroup className="space-y-2 p-0">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.key;

            return (
              <button
                key={link.key}
                onClick={() => setActiveTab(link.key)}
                className={`
            w-full
            flex items-center gap-3
            px-5 py-3
            text-sm
            transition-all duration-300
            hover:cursor-pointer
  
            ${
              isActive
                ? "bg-linear-to-r from-[#7F57F9] to-[#303035] text-white"
                : "text-gray-200 hover:bg-linear-to-r hover:from-[#7F57F9] hover:to-[#303035] hover:text-white"
            }
          `}
              >
                <Icon className="text-xl" />
                <span>{link.title}</span>
              </button>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#2C2C31] border-t border-white/10 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="overflow-hidden">
            <h2 className="text-sm text-white truncate">{user.name}</h2>

            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="
            flex items-center justify-center
            rounded-lg
            bg-red-500/10
            p-2
            text-red-400
            transition-all duration-200
            hover:bg-red-500/20
            hover:text-red-300
          "
          >
            <FiLogOut className="text-lg" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

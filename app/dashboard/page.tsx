"use client";

import { useState, useEffect } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

// Components
import Activities from "@/components/activities";
// import AttendanceSheet from "@/components/attendance-sheet";
import LiveCamera from "@/components/live-camera";
// import Analytics from "@/components/analytics";
// import UserManagement from "@/components/user-management";
// import AIInsights from "@/components/ai-insights";
// import Security from "@/components/security";
// import Journal from "@/components/journal";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <SidebarProvider>
      <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="min-h-screen w-full bg-linear-to-b from-[#7F57F9] via-black to-black text-white font-michroma overflow-hidden">
        <SidebarTrigger />
        {activeTab === "activities" && <Activities />}
      {activeTab === "live-camera" && <LiveCamera />}
      </main>
    </SidebarProvider>
  );
}

export default Dashboard;

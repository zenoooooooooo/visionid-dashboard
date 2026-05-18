"use client";

import { useState, useEffect } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

import Attendance from "@/components/attendance";
import LiveCamera from "@/components/live-camera";
import Journal from "@/components/journal";

const JETSON_IP = "192.168.100.197";

const TOTAL_REGISTERED_USERS = 2;

export type DetectionData = {
  name: string;
  status: string;
  time: string;
  confidence: number;
};

function Dashboard() {
  const [activeTab, setActiveTab] = useState("live-camera");

  const [detectedIndividuals, setDetectedIndividuals] = useState<
    DetectionData[]
  >([]);

  const [dataStats, setDataStats] = useState({
    present: 0,
    absent: TOTAL_REGISTERED_USERS,
    avrArrTime: "--:--",
  });

  useEffect(() => {
    const es = new EventSource(`http://${JETSON_IP}:5000/events`);

    es.onmessage = (e) => {
      const incomingData: DetectionData = JSON.parse(e.data);

      setDetectedIndividuals((prev) => {
        const filtered = prev.filter(
          (person) => person.name !== incomingData.name
        );

        const updated = [incomingData, ...filtered].slice(0, 10);

        const uniquePeople = new Set(updated.map((p) => p.name));

        const present = uniquePeople.size;

        const absent = Math.max(
          TOTAL_REGISTERED_USERS - present,
          0
        );

        const validTimes = updated
          .map((p) => p.time)
          .filter(Boolean);

        let avrArrTime = "--:--";

        if (validTimes.length > 0) {
          const totalMinutes = validTimes.reduce((acc, time) => {
            const [timePart, meridian] = time.split(" ");

            let [hours, minutes] = timePart
              .split(":")
              .map(Number);

            if (meridian === "PM" && hours !== 12) {
              hours += 12;
            }

            if (meridian === "AM" && hours === 12) {
              hours = 0;
            }

            return acc + hours * 60 + minutes;
          }, 0);

          const averageMinutes = Math.floor(
            totalMinutes / validTimes.length
          );

          let avgHours = Math.floor(averageMinutes / 60);
          const avgMinutes = averageMinutes % 60;

          const meridian = avgHours >= 12 ? "PM" : "AM";

          avgHours = avgHours % 12 || 12;

          avrArrTime = `${String(avgHours).padStart(
            2,
            "0"
          )}:${String(avgMinutes).padStart(2, "0")} ${meridian}`;
        }

        setDataStats({
          present,
          absent,
          avrArrTime,
        });

        return updated;
      });
    };

    es.onerror = () => {
      console.error("SSE connection lost");
    };

    return () => es.close();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="min-h-screen w-full bg-linear-to-b from-[#7F57F9] via-black to-black text-white font-michroma overflow-hidden">
        <SidebarTrigger />

        {activeTab === "attendance" && (
          <Attendance
            detectedIndividuals={detectedIndividuals}
            stats={dataStats}
          />
        )}

        {activeTab === "live-camera" && (
          <LiveCamera
            detectedIndividuals={detectedIndividuals}
          />
        )}

        {activeTab === "journal" && (
          <Journal
            present={dataStats.present}
            absent={dataStats.absent}
            avrArrTime={dataStats.avrArrTime}
          />
        )}
      </main>
    </SidebarProvider>
  );
}

export default Dashboard;
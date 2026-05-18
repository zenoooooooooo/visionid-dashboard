"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

import { FaCircle, FaUser } from "react-icons/fa";

function LiveCamera() {
  const [cameraData] = useState({
    cameraName: "Camera 1 - Main Entrance",
    isLive: true,
  });

  const [detectedIndividuals] = useState([
    "John Doe",
    "Jane Smith",
    "Michael Lee",
  ]);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 space-y-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Live Camera Monitoring
          </h1>

          <p className="text-gray-400 mt-1">
            Real-time face recognition and face tracking
          </p>
        </div>

        <div className="bg-[#2C2C31] border border-white/10 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-400">Current Date</p>

          <h2 className="text-lg text-white font-semibold">{currentDate}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <Card className="xl:col-span-3 bg-[#2C2C31] border-white/10 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Live Camera Feed
                </h2>
                <p className="text-sm text-zinc-400">
                  Real-time face detection monitoring
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaCircle
                  className={`text-xs ${
                    cameraData.isLive ? "text-green-400" : "text-red-400"
                  }`}
                />

                <span
                  className={`text-sm font-medium ${
                    cameraData.isLive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {cameraData.isLive ? "LIVE" : "OFFLINE"}
                </span>
              </div>
            </div>

            <div className=" bg-black overflow-hidden">
              <img
                src="http://192.168.100.197:5000/video_feed"
                alt="VisionID Live Feed"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10">
          <CardContent className="p-5">
            <h2 className="text-lg font-semibold mb-5 text-white">
              Detected Individuals
            </h2>

            <div className="space-y-3">
              {detectedIndividuals.map((person, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    border border-white/10
                    bg-black/20
                    px-4 py-3
                  "
                >
                  <div className="rounded-full bg-[#7F57F9]/20 p-2">
                    <FaUser className="text-[#A78BFA]" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">{person}</p>

                    <p className="text-xs text-green-400">Recognized</p>
                  </div>
                </div>
              ))}

              {detectedIndividuals.length === 0 && (
                <div className="text-sm text-gray-400">
                  No individuals detected
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LiveCamera;

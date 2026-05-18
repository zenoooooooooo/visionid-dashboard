"use client";

import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";

import { FaCircle, FaUser, FaRotateRight } from "react-icons/fa6";

const JETSON_IP = "192.168.100.197";

import { DetectionData } from "@/app/dashboard/page";

type LiveCameraProps = {
  detectedIndividuals: DetectionData[];
};

function LiveCamera({ detectedIndividuals }: LiveCameraProps) {
  const [isLive, setIsLive] = useState(false);

  const statusColor: Record<string, string> = {
    Early: "text-blue-400",
    "On Time": "text-green-400",
    "No Schedule": "text-gray-400",
  };

  const [streamKey, setStreamKey] = useState(Date.now());

  const refreshCamera = () => {
    setStreamKey(Date.now());
  };

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

              <div className="flex items-center gap-3">
                <button
                  onClick={refreshCamera}
                  className="
                    flex items-center gap-2
                    rounded-lg
                    border border-white/10
                    bg-white/5
                    px-3 py-2
                    text-sm text-white
                    transition hover:bg-white/10
                  "
                >
                  <FaRotateRight className="text-xs" />
                  Refresh
                </button>

                <div className="flex items-center gap-2">
                  <FaCircle
                    className={`text-xs ${
                      isLive ? "text-green-400" : "text-red-400"
                    }`}
                  />

                  <span
                    className={`text-sm font-medium ${
                      isLive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isLive ? "LIVE" : "OFFLINE"}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-162.5 bg-black">
              <img
                key={streamKey}
                src={`http://${JETSON_IP}:5000/video_feed?t=${streamKey}`}
                alt="VisionID Live Feed"
                className="w-full h-full object-cover"
                onLoad={() => setIsLive(true)}
                onError={() => setIsLive(false)}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10 h-fit">
          <CardContent className="p-5">
            <h2 className="text-lg font-semibold mb-5 text-white">
              Detected Individuals
            </h2>

            <div className="space-y-3">
              {detectedIndividuals.map((person, index) => {
                const isLate = person.status?.startsWith("Late");

                return (
                  <div
                    key={`${person.name}-${index}`}
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

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {person.name}
                      </p>

                      <div className="flex items-center justify-between mt-1">
                        <p
                          className={`text-xs font-medium ${
                            isLate
                              ? "text-red-400"
                              : statusColor[
                                  person.status as keyof typeof statusColor
                                ] || "text-green-400"
                          }`}
                        >
                          {person.status}
                        </p>

                        <span className="text-[11px] text-zinc-500">
                          {person.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

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

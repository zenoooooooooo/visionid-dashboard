"use client";

import { useState } from "react";
import Image from "next/image";

function Journal() {
  const [summary] = useState(
    "Attendance activity remained stable throughout the day. Most employees arrived within the expected time window, while a few late entries were detected and logged automatically by the system.",
  );

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
          <h1 className="text-3xl font-bold text-white">Attendance Journal</h1>

          <p className="text-gray-400 mt-1">
            Automated data collection and AI-generated insight.
          </p>
        </div>

        <div className="bg-[#2C2C31] border border-white/10 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-400">Current Date</p>

          <h2 className="text-lg text-white font-semibold">{currentDate}</h2>
        </div>
      </div>

      <div className="w-full rounded-3xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md p-6 shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-neutral-700 bg-black">
              <Image
                src="/images/logo2.png"
                alt="AI Logo"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">AI-Generated Summary</h2>

              <p className="text-sm text-neutral-400">
                Generated automatically from attendance logs
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-5">
          <p className="text-neutral-300 leading-8 text-[15px]">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Journal;

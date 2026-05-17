"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FaUsers, FaUserCheck, FaUserTimes, FaClock } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";

function Activities() {
  const [stats] = useState({
    totalUsers: 120,
    presentToday: 98,
    absentToday: 22,
    avgArrivalTime: "08:12 AM",
  });

  const [alerts] = useState([
    {
      camera: "Camera 1",
      message: "Unknown Person detected",
      timestamp: "10:32 AM",
    },
    {
      camera: "Camera 2",
      message: "Suspicious movement detected",
      timestamp: "11:05 AM",
    },
  ]);

  const [activities] = useState([
    {
      name: "John Doe",
      confidence: "96%",
      timestamp: "08:01 AM",
      status: "On Time",
    },
    {
      name: "Jane Smith",
      confidence: "89%",
      timestamp: "08:45 AM",
      status: "Late",
    },
    {
      name: "Michael Lee",
      confidence: "92%",
      timestamp: "07:58 AM",
      status: "On Time",
    },
  ]);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 space-y-6 text-white ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Activities</h1>

          <p className="text-gray-400 text-sm mt-1">
            Monitor attendance, alerts, and recent activity
          </p>
        </div>

        <div className="bg-[#2C2C31] border border-white/10 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-400">Current Date</p>

          <h2 className="text-lg text-white font-semibold">{currentDate}</h2>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">Total Users</CardTitle>
            <FaUsers className="text-white" />
          </CardHeader>
          <CardContent className="text-2xl text-white font-bold">
            {stats.totalUsers}
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">Present Today</CardTitle>
            <FaUserCheck className="text-white" />
          </CardHeader>
          <CardContent className="text-2xl text-white font-bold">
            {stats.presentToday}
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">Absent Today</CardTitle>
            <FaUserTimes className="text-white" />
          </CardHeader>
          <CardContent className="text-2xl text-white font-bold">
            {stats.absentToday}
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">
              Avg Arrival Time
            </CardTitle>
            <FaClock className="text-white" />
          </CardHeader>
          <CardContent className="text-2xl text-white font-bold">
            {stats.avgArrivalTime}
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <MdOutlineWarning className="text-yellow-400" />
          Alerts
        </h2>

        <div className="rounded-xl border border-white/10 overflow-hidden">
          <Table>
            <TableHeader className="bg-[#2C2C31]">
              <TableRow>
                <TableHead className="text-white">Camera</TableHead>
                <TableHead className="text-white">Message</TableHead>
                <TableHead className="text-white">Timestamp</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {alerts.map((alert, index) => (
                <TableRow key={index} className="border-white/10">
                  <TableCell>{alert.camera}</TableCell>
                  <TableCell>{alert.message}</TableCell>
                  <TableCell>{alert.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>

        <div className="rounded-xl border border-white/10 overflow-hidden">
          <Table>
            <TableHeader className="bg-[#2C2C31]">
              <TableRow>
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Confidence</TableHead>
                <TableHead className="text-white">Timestamp</TableHead>
                <TableHead className="text-white">Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {activities.map((item, index) => (
                <TableRow key={index} className="border-white/10">
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.confidence}</TableCell>
                  <TableCell>{item.timestamp}</TableCell>

                  <TableCell>
                    <span
                      className={`
                        px-2 py-1 rounded-md text-xs
                        ${
                          item.status === "On Time"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}

export default Activities;

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

import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaClipboardList,
} from "react-icons/fa";

import { MdOutlineWarning } from "react-icons/md";

import { DetectionData } from "@/app/dashboard/page";

type AttendanceProps = {
  detectedIndividuals: DetectionData[];
  stats: {
    present: number;
    absent: number;
    avrArrTime: string;
  };
};

function Attendance({
  detectedIndividuals,
  stats,
}: AttendanceProps) {
  const students = ["E-Jhay Esplana", "Lily"];

  const [alerts] = useState([
    {
      camera: "Camera 1",
      message: "Unknown person detected",
      timestamp: "10:32 AM",
    },
    {
      camera: "Camera 2",
      message: "Multiple faces detected",
      timestamp: "11:05 AM",
    },
  ]);

  const attendanceSheet = students.map((student) => {
    const detected = detectedIndividuals.find(
      (person) =>
        person.name.toLowerCase() === student.toLowerCase()
    );

    return {
      name: student,
      status: detected ? "Present" : "Absent",
      time: detected?.time || "--:--",
      confidence: detected?.confidence || "--",
    };
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
          <h1 className="text-3xl font-bold">
            Attendance Sheet
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Monitor attendance records and live recognition
            activity
          </p>
        </div>

        <div className="bg-[#2C2C31] border border-white/10 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-400">
            Current Date
          </p>

          <h2 className="text-lg text-white font-semibold">
            {currentDate}
          </h2>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">
              Total Students
            </CardTitle>

            <FaUsers className="text-white" />
          </CardHeader>

          <CardContent className="text-2xl text-white font-bold">
            {students.length}
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">
              Present Today
            </CardTitle>

            <FaUserCheck className="text-white" />
          </CardHeader>

          <CardContent className="text-2xl text-white font-bold">
            {stats.present}
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">
              Absent Today
            </CardTitle>

            <FaUserTimes className="text-white" />
          </CardHeader>

          <CardContent className="text-2xl text-white font-bold">
            {stats.absent}
          </CardContent>
        </Card>

        <Card className="bg-[#2C2C31] border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-white">
              Attendance Rate
            </CardTitle>

            <FaClipboardList className="text-white" />
          </CardHeader>

          <CardContent className="text-2xl text-white font-bold">
            {Math.round(
              (stats.present / students.length) * 100
            )}
            %
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <MdOutlineWarning className="text-yellow-400" />
          Security Alerts
        </h2>

        <div className="rounded-xl border border-white/10 overflow-hidden">
          <Table>
            <TableHeader className="bg-[#2C2C31]">
              <TableRow>
                <TableHead className="text-white">
                  Camera
                </TableHead>

                <TableHead className="text-white">
                  Alert Message
                </TableHead>

                <TableHead className="text-white">
                  Timestamp
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {alerts.map((alert, index) => (
                <TableRow
                  key={index}
                  className="border-white/10"
                >
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
        <h2 className="text-lg font-semibold mb-3">
          Student Attendance Records
        </h2>

        <div className="rounded-xl border border-white/10 overflow-hidden">
          <Table>
            <TableHeader className="bg-[#2C2C31]">
              <TableRow>
                <TableHead className="text-white">
                  Student Name
                </TableHead>

                <TableHead className="text-white">
                  Confidence
                </TableHead>

                <TableHead className="text-white">
                  Arrival Time
                </TableHead>

                <TableHead className="text-white">
                  Attendance
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {attendanceSheet.map((student, index) => (
                <TableRow
                  key={index}
                  className="border-white/10"
                >
                  <TableCell>{student.name}</TableCell>

                  <TableCell>
                    {student.confidence === "--"
                      ? "--"
                      : `${student.confidence}%`}
                  </TableCell>

                  <TableCell>{student.time}</TableCell>

                  <TableCell>
                    <span
                      className={`
                        px-2 py-1 rounded-md text-xs
                        ${
                          student.status === "Present"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }
                      `}
                    >
                      {student.status}
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

export default Attendance;
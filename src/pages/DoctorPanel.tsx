import React from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, UserRound, FileText } from "lucide-react";

const DoctorPanel = () => {
  const userRole = "staff";

  const todaysAppointments = [
    {
      id: 1,
      patientName: "John Doe",
      time: "9:00 AM",
      type: "Follow-up",
      status: "completed",
      notes: "Patient reports improved condition. Continue current medication.",
    },
    {
      id: 2,
      patientName: "Sarah Johnson",
      time: "10:30 AM",
      type: "New Patient",
      status: "completed",
      notes:
        "Initial assessment complete. Ordered blood work and prescribed antibiotic.",
    },
    {
      id: 3,
      patientName: "Robert Garcia",
      time: "1:00 PM",
      type: "Consultation",
      status: "in-progress",
      notes: "",
    },
    {
      id: 4,
      patientName: "Emily Wilson",
      time: "2:30 PM",
      type: "Follow-up",
      status: "scheduled",
      notes: "",
    },
    {
      id: 5,
      patientName: "Michael Brown",
      time: "3:45 PM",
      type: "Consultation",
      status: "scheduled",
      notes: "",
    },
  ];

  const pendingTasks = [
    {
      id: 1,
      task: "Review lab results for patient #12458",
      priority: "high",
      due: "Today",
    },
    {
      id: 2,
      task: "Complete medical report for Sarah Johnson",
      priority: "medium",
      due: "Today",
    },
    {
      id: 3,
      task: "Sign prescription refills (3)",
      priority: "medium",
      due: "Tomorrow",
    },
    {
      id: 4,
      task: "Review referral requests (2)",
      priority: "low",
      due: "May 15, 2025",
    },
  ];

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2">
              <Clock size={16} />
              <span>On Duty</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Start Patient Session
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Today's Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">
                {todaysAppointments.length}
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  {
                    todaysAppointments.filter((a) => a.status === "completed")
                      .length
                  }{" "}
                  completed
                </span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                  {
                    todaysAppointments.filter((a) => a.status === "in-progress")
                      .length
                  }{" "}
                  in progress
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">
                {pendingTasks.length}
              </p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                  {pendingTasks.filter((t) => t.priority === "high").length}{" "}
                  high priority
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Next Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              {todaysAppointments.find((a) => a.status === "scheduled") ? (
                <>
                  <p className="font-medium">
                    {
                      todaysAppointments.find((a) => a.status === "scheduled")
                        ?.patientName
                    }
                  </p>
                  <p className="text-sm text-gray-500">
                    {
                      todaysAppointments.find((a) => a.status === "scheduled")
                        ?.time
                    }{" "}
                    -{" "}
                    {
                      todaysAppointments.find((a) => a.status === "scheduled")
                        ?.type
                    }
                  </p>
                  <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                    View Details
                  </button>
                </>
              ) : (
                <p className="text-gray-500">No more appointments today</p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Today's Schedule</CardTitle>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
              <Calendar size={16} />
              View Full Calendar
            </button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2 font-medium">Time</th>
                    <th className="pb-2 font-medium">Patient</th>
                    <th className="pb-2 font-medium">Type</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todaysAppointments.map((appointment) => (
                    <tr key={appointment.id} className="border-b">
                      <td className="py-3">{appointment.time}</td>
                      <td className="py-3">{appointment.patientName}</td>
                      <td className="py-3">{appointment.type}</td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs capitalize ${
                            appointment.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : appointment.status === "in-progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="py-3 space-x-2">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          {appointment.status === "scheduled"
                            ? "Start"
                            : "View"}
                        </button>
                        {appointment.status === "scheduled" && (
                          <button className="text-sm text-gray-600 hover:text-gray-800">
                            Reschedule
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-3 w-3 rounded-full mt-1.5 ${
                        task.priority === "high"
                          ? "bg-red-500"
                          : task.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                      }`}
                    ></div>
                    <div>
                      <p className="font-medium">{task.task}</p>
                      <p className="text-sm text-gray-500">Due: {task.due}</p>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Complete
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorPanel;

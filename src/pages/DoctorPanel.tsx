import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Clock,
  UserRound,
  FileText,
  Activity,
  Microscope,
  Eye,
  Check,
} from "lucide-react";

const DoctorPanel = () => {
  const userRole = "staff";
  const navigate = useNavigate();
  const { toast } = useToast();

  // Sample data for today's appointments
  const [todaysAppointments, setTodaysAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      time: "9:00 AM",
      type: "Follow-up",
      status: "completed",
      notes: "Patient reports improved condition. Continue current medication.",
      viewed: false,
    },
    {
      id: 2,
      patientName: "Sarah Johnson",
      time: "10:30 AM",
      type: "New Patient",
      status: "completed",
      notes:
        "Initial assessment complete. Ordered blood work and prescribed antibiotic.",
      viewed: false,
    },
    {
      id: 3,
      patientName: "Robert Garcia",
      time: "1:00 PM",
      type: "Consultation",
      status: "in-progress",
      notes: "",
      viewed: false,
    },
    {
      id: 4,
      patientName: "Emily Wilson",
      time: "2:30 PM",
      type: "Follow-up",
      status: "scheduled",
      notes: "",
      viewed: false,
    },
    {
      id: 5,
      patientName: "Michael Brown",
      time: "3:45 PM",
      type: "Consultation",
      status: "scheduled",
      notes: "",
      viewed: false,
    },
  ]);

  // Sample data for pending tasks
  const [pendingTasks, setPendingTasks] = useState([
    {
      id: 1,
      task: "Review lab results for patient #12458",
      priority: "high",
      due: "Today",
      viewed: false,
      completed: false,
    },
    {
      id: 2,
      task: "Complete medical report for Sarah Johnson",
      priority: "medium",
      due: "Today",
      viewed: false,
      completed: false,
    },
    {
      id: 3,
      task: "Sign prescription refills (3)",
      priority: "medium",
      due: "Tomorrow",
      viewed: false,
      completed: false,
    },
    {
      id: 4,
      task: "Review referral requests (2)",
      priority: "low",
      due: "May 15, 2025",
      viewed: false,
      completed: false,
    },
  ]);

  // Available modalities
  const [modalities, setModalities] = useState([
    {
      name: "CT Scan",
      icon: Activity,
      path: "/modalities/ct-scan",
      description: "Computed Tomography scanning",
    },
    {
      name: "MRI",
      icon: Activity,
      path: "/modalities/mri-scan",
      description: "Magnetic Resonance Imaging",
    },
    {
      name: "Ultrasound",
      icon: Activity,
      path: "/modalities/ultrasound",
      description: "Ultrasound imaging",
    },
  ]);

  // Check if user is actually a doctor
  useEffect(() => {
    const staffRole = localStorage.getItem("staffRole");
    if (staffRole !== "doctor") {
      toast({
        title: "Access Restricted",
        description: "You need doctor credentials to access this panel",
        variant: "destructive",
      });
      // Redirect to appropriate panel or login
      navigate("/login");
    }
  }, [navigate, toast]);

  // Handle view appointment
  const handleViewAppointment = (id: number) => {
    setTodaysAppointments(
      todaysAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, viewed: true } : appointment
      )
    );

    toast({
      title: "Appointment Viewed",
      description: "Appointment details have been viewed",
    });
  };

  // Handle complete task
  const handleCompleteTask = (id: number) => {
    setPendingTasks(
      pendingTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );

    toast({
      title: "Task Completed",
      description: "Task has been marked as complete",
    });
  };

  // Handle view task
  const handleViewTask = (id: number) => {
    setPendingTasks(
      pendingTasks.map((task) =>
        task.id === id ? { ...task, viewed: true } : task
      )
    );

    toast({
      title: "Task Viewed",
      description: "Task has been marked as viewed",
    });
  };

  // Handle navigation to modality
  const handleModalityClick = (path: string) => {
    navigate(path);
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
        </div>

        {/* Quick Stats */}
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

        {/* Modalities Section */}
        <Card>
          <CardHeader>
            <CardTitle>Medical Imaging & Diagnostics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {modalities.map((modality, index) => (
                <div
                  key={index}
                  onClick={() => handleModalityClick(modality.path)}
                  className="p-4 border rounded-lg hover:bg-blue-50 flex flex-col items-center gap-2 transition-colors cursor-pointer"
                >
                  <div className="p-3 bg-blue-100 rounded-full">
                    <modality.icon size={24} className="text-blue-600" />
                  </div>
                  <span className="font-medium">{modality.name}</span>
                  <p className="text-xs text-gray-500 text-center">
                    {modality.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 py-0 px-2 flex items-center gap-1"
                          onClick={() => handleViewAppointment(appointment.id)}
                        >
                          <Eye size={15} />
                          <span>View</span>
                        </Button>
                        {appointment.status === "scheduled" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 py-0 px-2 flex items-center gap-1"
                          >
                            <Calendar size={15} />
                            <span>Reschedule</span>
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Tasks */}
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
                      <p className="font-medium">
                        {task.task}
                        {task.viewed && !task.completed && (
                          <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                            Viewed
                          </span>
                        )}
                        {task.completed && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full">
                            Completed
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">Due: {task.due}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!task.viewed && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewTask(task.id)}
                        className="h-7 py-0 px-2 flex items-center gap-1"
                      >
                        <Eye size={15} />
                        <span>View</span>
                      </Button>
                    )}
                    {!task.completed && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCompleteTask(task.id)}
                        className="h-7 py-0 px-2 flex items-center gap-1"
                      >
                        <Check size={15} />
                        <span>Complete</span>
                      </Button>
                    )}
                  </div>
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  UserRound,
  Search,
  Users,
  Activity,
  FileText,
} from "lucide-react";

const ReceptionistPanel = () => {
  const userRole = "staff";
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const todaysAppointments = [
    {
      id: 1,
      patientName: "John Doe",
      time: "9:00 AM",
      doctor: "Dr. Smith",
      type: "Follow-up",
      status: "checked-in",
    },
    {
      id: 2,
      patientName: "Sarah Johnson",
      time: "10:30 AM",
      doctor: "Dr. Smith",
      type: "New Patient",
      status: "in-progress",
    },
    {
      id: 3,
      patientName: "Robert Garcia",
      time: "11:15 AM",
      doctor: "Dr. Wilson",
      type: "Consultation",
      status: "scheduled",
    },
    {
      id: 4,
      patientName: "Emily Wilson",
      time: "2:30 PM",
      doctor: "Dr. Smith",
      type: "Follow-up",
      status: "scheduled",
    },
    {
      id: 5,
      patientName: "Michael Brown",
      time: "3:45 PM",
      doctor: "Dr. Wilson",
      type: "Consultation",
      status: "scheduled",
    },
  ];

  const waitingPatients = [
    {
      id: 1,
      name: "John Doe",
      arrivalTime: "8:45 AM",
      appointmentTime: "9:00 AM",
      waitTime: "15 min",
    },
    {
      id: 3,
      name: "Robert Garcia",
      arrivalTime: "11:05 AM",
      appointmentTime: "11:15 AM",
      waitTime: "10 min",
    },
  ];

  const modalities = [
    {
      name: "CT Scan",
      status: "Available (2)",
      path: "/modalities/ct-scan",
      icon: Activity,
    },
    {
      name: "MRI",
      status: "1 Available",
      path: "/modalities/mri-scan",
      icon: Activity,
    },
    {
      name: "Ultrasound",
      status: "All Available",
      path: "/modalities/ultrasound",
      icon: Activity,
    },
    {
      name: "X-Ray",
      status: "Busy",
      path: "/modalities/x-ray",
      icon: Activity,
    },
  ];

  const handleModalityClick = (path: string) => {
    navigate(path);
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Reception Desk</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="col-span-1 md:col-span-3">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Patient Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search patients by name or ID..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm">
                  Search
                </button>
                <button className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded-md text-sm">
                  Advanced
                </button>
                <button className="px-3 py-1.5 border border-green-600 text-green-600 rounded-md text-sm flex items-center gap-1">
                  <UserRound size={16} />
                  New Patient
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-gray-500 text-sm">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Imaging & Diagnostics Status</CardTitle>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
              <Calendar size={16} />
              Schedule Procedure
            </button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                    {modality.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Waiting Patients</CardTitle>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-500">
                Online Check-in Available
              </span>
            </div>
          </CardHeader>
          <CardContent>
            {waitingPatients.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="pb-2 font-medium">Patient</th>
                      <th className="pb-2 font-medium">Arrived</th>
                      <th className="pb-2 font-medium">Appointment</th>
                      <th className="pb-2 font-medium">Wait Time</th>
                      <th className="pb-2 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waitingPatients.map((patient) => (
                      <tr key={patient.id} className="border-b">
                        <td className="py-3 font-medium">{patient.name}</td>
                        <td className="py-3">{patient.arrivalTime}</td>
                        <td className="py-3">{patient.appointmentTime}</td>
                        <td className="py-3">{patient.waitTime}</td>
                        <td className="py-3 space-x-2">
                          <button className="text-sm text-blue-600 hover:text-blue-800">
                            Notify Doctor
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-800">
                            Check In
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-6">
                No patients currently waiting
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Today's Appointments</CardTitle>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
              <Calendar size={16} />
              View Calendar
            </button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2 font-medium">Time</th>
                    <th className="pb-2 font-medium">Patient</th>
                    <th className="pb-2 font-medium">Doctor</th>
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
                      <td className="py-3">{appointment.doctor}</td>
                      <td className="py-3">{appointment.type}</td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs capitalize ${
                            appointment.status === "checked-in"
                              ? "bg-yellow-100 text-yellow-700"
                              : appointment.status === "in-progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="py-3 space-x-2">
                        {appointment.status === "scheduled" ? (
                          <button className="text-sm text-green-600 hover:text-green-800">
                            Check In
                          </button>
                        ) : (
                          <button className="text-sm text-blue-600 hover:text-blue-800">
                            View
                          </button>
                        )}

                        <button className="text-sm text-gray-600 hover:text-gray-800">
                          Edit
                        </button>
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
            <CardTitle>Quick Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Dr. John Smith</h3>
                <p className="text-sm text-gray-500">Primary Care</p>
                <p className="text-sm mt-1">Ext: 1234</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Dr. Sarah Wilson</h3>
                <p className="text-sm text-gray-500">Cardiology</p>
                <p className="text-sm mt-1">Ext: 2345</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Lab Department</h3>
                <p className="text-sm text-gray-500">Medical Tests</p>
                <p className="text-sm mt-1">Ext: 3456</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Billing Office</h3>
                <p className="text-sm text-gray-500">Payments & Insurance</p>
                <p className="text-sm mt-1">Ext: 4567</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Pharmacy</h3>
                <p className="text-sm text-gray-500">Prescriptions</p>
                <p className="text-sm mt-1">Ext: 5678</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium">Emergency Contact</h3>
                <p className="text-sm text-gray-500">Urgent Care</p>
                <p className="text-sm mt-1">Ext: 9911</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ReceptionistPanel;

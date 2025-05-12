import React, { useState } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Hospital, FileText } from "lucide-react";

const AdminPanel = () => {
  const userRole = "admin";

  const [stats, setStats] = useState({
    totalStaff: 24,
    totalPatients: 1258,
    appointments: 47,
    revenue: 42350,
  });

  const recentActivities = [
    {
      id: 1,
      activity: "New doctor added",
      user: "System Admin",
      time: "Today at 10:32 AM",
    },
    {
      id: 2,
      activity: "Updated billing system",
      user: "System Admin",
      time: "Yesterday at 4:15 PM",
    },
    {
      id: 3,
      activity: "Equipment maintenance scheduled",
      user: "Facility Manager",
      time: "May 10, 2025",
    },
    {
      id: 4,
      activity: "New patient registration flow deployed",
      user: "System Admin",
      time: "May 9, 2025",
    },
  ];

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Administration Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users size={20} className="text-blue-600" />
                Staff Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalStaff}</p>
              <div className="flex items-center mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  +2 this month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users size={20} className="text-blue-600" />
                Patients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalPatients}</p>
              <div className="flex items-center mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  +45 this month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar size={20} className="text-blue-600" />
                Today's Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.appointments}</p>
              <div className="flex items-center mt-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                  12 remaining
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText size={20} className="text-blue-600" />
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                ${stats.revenue.toLocaleString()}
              </p>
              <div className="flex items-center mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  +8% from last month
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 border rounded-lg hover:bg-blue-50 flex flex-col items-center gap-2 transition-colors">
                <Users size={24} className="text-blue-600" />
                <span>Manage Staff</span>
              </button>
              <button className="p-4 border rounded-lg hover:bg-blue-50 flex flex-col items-center gap-2 transition-colors">
                <Hospital size={24} className="text-blue-600" />
                <span>Department Settings</span>
              </button>
              <button className="p-4 border rounded-lg hover:bg-blue-50 flex flex-col items-center gap-2 transition-colors">
                <FileText size={24} className="text-blue-600" />
                <span>System Logs</span>
              </button>
              <button className="p-4 border rounded-lg hover:bg-blue-50 flex flex-col items-center gap-2 transition-colors">
                <Calendar size={24} className="text-blue-600" />
                <span>Schedule Management</span>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent System Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex justify-between border-b pb-3 last:border-b-0"
                >
                  <div>
                    <p className="font-medium">{activity.activity}</p>
                    <p className="text-sm text-gray-500">By: {activity.user}</p>
                  </div>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminPanel;

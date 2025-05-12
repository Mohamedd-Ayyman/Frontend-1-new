import React from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Users,
  Activity,
  FileText,
  CreditCard,
  BarChart3,
  Building2,
} from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // For demonstration purposes - in a real app, this would come from auth context
  // Getting user role from localStorage (set during login)
  const userRole = localStorage.getItem("userRole") || "patient";

  // Example welcome message based on user role
  const welcomeMessage = () => {
    switch (userRole) {
      case "admin":
        return "Welcome to the Administrator Dashboard";
      case "staff":
        return "Welcome to the Clinic Staff Portal";
      default:
        return "Welcome to Your Patient Portal";
    }
  };

  // Render different dashboard content based on user role
  const renderDashboardContent = () => {
    switch (userRole) {
      case "admin":
        return renderAdminDashboard();
      case "staff":
        return renderStaffDashboard();
      default:
        return renderPatientDashboard();
    }
  };

  // Admin dashboard content
  const renderAdminDashboard = () => {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/admin")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                System Administration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                Manage system settings, users, and permissions
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/staff")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Staff Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                Add, edit, or remove staff members
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/billing")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
                Financial Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                View financial reports and billing information
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/appointments")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Appointment System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                Manage appointment schedules and availability
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/medical-records")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Patient Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                Access and manage patient medical records
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Analytics & Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                View system analytics and generate reports
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent System Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="font-medium">New Staff Member Added</p>
                <p className="text-sm text-gray-500">Today at 11:30 AM</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="font-medium">System Backup Completed</p>
                <p className="text-sm text-gray-500">Today at 3:15 AM</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-1">
                <p className="font-medium">
                  Policy Updated: Patient Data Retention
                </p>
                <p className="text-sm text-gray-500">Yesterday at 4:20 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    );
  };

  // Staff dashboard content
  const renderStaffDashboard = () => {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/doctor")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Doctor Panel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                Access your appointments and patient records
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/receptionist")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Reception Desk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                Manage patient check-ins and scheduling
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/appointments")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">24</p>
              <p className="text-gray-500 text-sm">Total appointments today</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/modalities/ct-scan")}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                Medical Imaging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-sm">
                Access CT, MRI and ultrasound systems
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="font-medium">Patient Records Updated</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="font-medium">Prescription Issued</p>
                <p className="text-sm text-gray-500">3 hours ago</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-1">
                <p className="font-medium">Lab Results Received</p>
                <p className="text-sm text-gray-500">Yesterday at 1:45 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    );
  };

  // Patient dashboard content - keeping original dashboard for patients
  const renderPatientDashboard = () => {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">2</p>
              <p className="text-gray-500 text-sm">Next: Wednesday, 10:00 AM</p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">3</p>
              <p className="text-gray-500 text-sm">Last updated: 2 days ago</p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">1</p>
              <p className="text-gray-500 text-sm">
                New message from Dr. Smith
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="font-medium">Prescription Refilled</p>
                <p className="text-sm text-gray-500">Yesterday at 3:45 PM</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="font-medium">Appointment Confirmed</p>
                <p className="text-sm text-gray-500">May 2, 2025 at 10:15 AM</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-1">
                <p className="font-medium">Lab Results Available</p>
                <p className="text-sm text-gray-500">
                  April 30, 2025 at 9:20 AM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    );
  };

  return (
    <DashboardLayout userRole={userRole as "admin" | "staff" | "patient"}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{welcomeMessage()}</h1>
        {renderDashboardContent()}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

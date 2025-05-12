import React, { useState } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  Calendar,
  Hospital,
  FileText,
  Trash2,
  PlusCircle,
  Edit,
  Search,
  Eye,
  Check,
} from "lucide-react";

const AdminPanel = () => {
  const userRole = "admin";
  const { toast } = useToast();

  const [stats, setStats] = useState({
    totalStaff: 24,
    totalPatients: 1258,
    appointments: 47,
    revenue: 42350,
  });

  const [staffMembers, setStaffMembers] = useState([
    {
      id: 1,
      name: "Dr. John Smith",
      role: "Doctor",
      department: "Cardiology",
      status: "active",
      viewed: false,
      completed: false,
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      role: "Doctor",
      department: "Pediatrics",
      status: "active",
      viewed: false,
      completed: false,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Receptionist",
      department: "Front Desk",
      status: "active",
      viewed: false,
      completed: false,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Nurse",
      department: "Emergency",
      status: "inactive",
      viewed: false,
      completed: false,
    },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      activity: "New doctor added",
      user: "System Admin",
      time: "Today at 10:32 AM",
      viewed: false,
    },
    {
      id: 2,
      activity: "Updated billing system",
      user: "System Admin",
      time: "Yesterday at 4:15 PM",
      viewed: false,
    },
    {
      id: 3,
      activity: "Equipment maintenance scheduled",
      user: "Facility Manager",
      time: "May 10, 2025",
      viewed: false,
    },
    {
      id: 4,
      activity: "New patient registration flow deployed",
      user: "System Admin",
      time: "May 9, 2025",
      viewed: false,
    },
  ]);

  const [newStaffName, setNewStaffName] = useState("");
  const [newStaffRole, setNewStaffRole] = useState("");
  const [newStaffDepartment, setNewStaffDepartment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddStaff = () => {
    if (!newStaffName || !newStaffRole || !newStaffDepartment) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newStaff = {
      id: staffMembers.length + 1,
      name: newStaffName,
      role: newStaffRole,
      department: newStaffDepartment,
      status: "active",
      viewed: false,
      completed: false,
    };

    setStaffMembers([...staffMembers, newStaff]);
    setNewStaffName("");
    setNewStaffRole("");
    setNewStaffDepartment("");

    toast({
      title: "Success",
      description: "Staff member added successfully",
    });

    // Add to recent activities
    const newActivity = {
      id: recentActivities.length + 1,
      activity: `New staff member added: ${newStaffName}`,
      user: "System Admin",
      time: "Just now",
      viewed: false,
    };

    setRecentActivities([newActivity, ...recentActivities]);
    setStats({ ...stats, totalStaff: stats.totalStaff + 1 });
  };

  const handleDeleteStaff = (id: number) => {
    const staffToDelete = staffMembers.find((staff) => staff.id === id);
    setStaffMembers(staffMembers.filter((staff) => staff.id !== id));

    toast({
      title: "Staff Removed",
      description: `${staffToDelete?.name} has been removed`,
    });

    const newActivity = {
      id: recentActivities.length + 1,
      activity: `Staff member removed: ${staffToDelete?.name}`,
      user: "System Admin",
      time: "Just now",
      viewed: false,
    };

    setRecentActivities([newActivity, ...recentActivities]);
    setStats({ ...stats, totalStaff: stats.totalStaff - 1 });
  };

  const handleMarkViewed = (id: number) => {
    setStaffMembers(
      staffMembers.map((staff) =>
        staff.id === id ? { ...staff, viewed: true } : staff
      )
    );

    toast({
      title: "Marked as Viewed",
      description: "Staff record has been marked as viewed",
    });
  };

  const handleMarkCompleted = (id: number) => {
    setStaffMembers(
      staffMembers.map((staff) =>
        staff.id === id ? { ...staff, completed: true } : staff
      )
    );

    toast({
      title: "Marked as Complete",
      description: "Staff record has been marked as complete",
    });
  };

  const handleViewActivity = (id: number) => {
    setRecentActivities(
      recentActivities.map((activity) =>
        activity.id === id ? { ...activity, viewed: true } : activity
      )
    );

    toast({
      title: "Viewed",
      description: "Activity has been marked as viewed",
    });
  };

  const filteredStaff = staffMembers.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Staff Management</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <PlusCircle size={16} />
                  Add Staff
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Staff Member</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      value={newStaffName}
                      onChange={(e) => setNewStaffName(e.target.value)}
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium mb-1"
                    >
                      Role
                    </label>
                    <Input
                      id="role"
                      value={newStaffRole}
                      onChange={(e) => setNewStaffRole(e.target.value)}
                      placeholder="Doctor, Nurse, Receptionist, etc."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium mb-1"
                    >
                      Department
                    </label>
                    <Input
                      id="department"
                      value={newStaffDepartment}
                      onChange={(e) => setNewStaffDepartment(e.target.value)}
                      placeholder="Cardiology, Pediatrics, etc."
                    />
                  </div>
                  <Button className="w-full" onClick={handleAddStaff}>
                    Add Staff Member
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search staff..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2 font-medium">Name</th>
                    <th className="pb-2 font-medium">Role</th>
                    <th className="pb-2 font-medium">Department</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStaff.map((staff) => (
                    <tr key={staff.id} className="border-b">
                      <td className="py-3">{staff.name}</td>
                      <td className="py-3">{staff.role}</td>
                      <td className="py-3">{staff.department}</td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs capitalize ${
                            staff.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {staff.status}
                        </span>
                      </td>
                      <td className="py-3 space-x-2 flex">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleMarkViewed(staff.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleMarkCompleted(staff.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDeleteStaff(staff.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
                  className="flex items-center justify-between border-b pb-3 last:border-b-0"
                >
                  <div>
                    <p className="font-medium">
                      {activity.activity}
                      {activity.viewed && (
                        <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                          Viewed
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500">By: {activity.user}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-gray-500">{activity.time}</p>
                    {!activity.viewed && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 p-1 text-blue-600"
                        onClick={() => handleViewActivity(activity.id)}
                      >
                        <Eye size={15} className="mr-1" /> View
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

export default AdminPanel;

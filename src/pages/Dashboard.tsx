
import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  // For demonstration purposes - this would be retrieved from authentication context
  const userRole = 'patient'; 
  
  // Example welcome message based on user role
  const welcomeMessage = () => {
    switch(userRole) {
      case 'admin':
        return "Welcome to the Administrator Dashboard";
      case 'staff':
        return "Welcome to the Clinic Staff Portal";
      default:
        return "Welcome to Your Patient Portal";
    }
  };

  return (
    <DashboardLayout userRole={userRole as 'admin' | 'staff' | 'patient'}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{welcomeMessage()}</h1>
        
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
              <p className="text-gray-500 text-sm">New message from Dr. Smith</p>
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
                <p className="text-sm text-gray-500">April 30, 2025 at 9:20 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

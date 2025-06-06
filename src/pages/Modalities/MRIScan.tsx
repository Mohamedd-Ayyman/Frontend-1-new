import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Image, FileText, Activity } from "lucide-react";

const MRIScan = () => {
  const userRole = "staff";

  const upcomingScans = [
    {
      id: 1,
      patient: "Emma Thompson",
      time: "9:30 AM",
      date: "2025-05-15",
      scanType: "Brain MRI",
      status: "scheduled",
    },
    {
      id: 2,
      patient: "Robert Chen",
      time: "11:00 AM",
      date: "2025-05-15",
      scanType: "Lumbar MRI",
      status: "scheduled",
    },
    {
      id: 3,
      patient: "Sarah Williams",
      time: "1:45 PM",
      date: "2025-05-16",
      scanType: "Knee MRI",
      status: "scheduled",
    },
  ];

  const recentScans = [
    {
      id: 1,
      patient: "James Wilson",
      date: "2025-05-10",
      type: "Brain MRI",
      radiologist: "Dr. Lisa Wong",
      status: "complete",
      findings: "No abnormalities detected in brain tissue",
    },
    {
      id: 2,
      patient: "Maria Rodriguez",
      date: "2025-05-09",
      type: "Spinal MRI",
      radiologist: "Dr. John Chen",
      status: "complete",
      findings: "Minor disc degeneration at L4-L5",
    },
  ];

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">MRI Department</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <Calendar size={16} />
            Schedule New MRI
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">MRI Machine 1 (1.5T)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <p className="text-green-700 font-medium">Available</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Last calibration: May 5, 2025
              </p>
              <div className="mt-3 flex items-center text-sm">
                <Activity size={16} className="text-blue-600 mr-2" />
                <span>Machine performance: Excellent</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">MRI Machine 2 (3T)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <p className="text-red-700 font-medium">In Use</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Current patient: Thomas Brown
              </p>
              <div className="mt-3 flex items-center text-sm">
                <Activity size={16} className="text-blue-600 mr-2" />
                <span>Machine performance: Good</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming MRI Scans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2 font-medium">Patient</th>
                    <th className="pb-2 font-medium">Time</th>
                    <th className="pb-2 font-medium">Type</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingScans.map((scan) => (
                    <tr key={scan.id} className="border-b">
                      <td className="py-3">{scan.patient}</td>
                      <td className="py-3">{scan.time}</td>
                      <td className="py-3">{scan.scanType}</td>
                      <td className="py-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs capitalize">
                          {scan.status}
                        </span>
                      </td>
                      <td className="py-3 space-x-2">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Prepare
                        </button>
                        <button className="text-sm text-gray-600 hover:text-gray-800">
                          Reschedule
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
            <CardTitle>Recent Completed MRIs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentScans.map((scan) => (
                <div
                  key={scan.id}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">
                      {scan.patient} - {scan.type}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {new Date(scan.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Radiologist: {scan.radiologist}
                  </p>
                  <p className="text-sm mt-1">{scan.findings}</p>
                  <div className="mt-2 flex gap-3">
                    <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Image size={14} /> View Images
                    </button>
                    <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <FileText size={14} /> Full Report
                    </button>
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

export default MRIScan;

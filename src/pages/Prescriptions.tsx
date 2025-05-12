import React from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Prescriptions = () => {
  const userRole = "patient";
  const prescriptions = [
    {
      id: 1,
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "3 times daily",
      startDate: "2025-05-01",
      endDate: "2025-05-10",
      prescribedBy: "Dr. John Smith",
      status: "active",
    },
    {
      id: 2,
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "2025-04-15",
      endDate: "2025-07-15",
      prescribedBy: "Dr. Sarah Johnson",
      status: "active",
    },
    {
      id: 3,
      medication: "Ibuprofen",
      dosage: "400mg",
      frequency: "As needed for pain",
      startDate: "2025-04-20",
      endDate: "2025-05-04",
      prescribedBy: "Dr. John Smith",
      status: "completed",
    },
  ];

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Prescriptions</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FileText size={16} />
            Request Refill
          </button>
        </div>

        <div className="grid gap-6">
          {prescriptions.map((prescription) => (
            <Card
              key={prescription.id}
              className={
                prescription.status === "completed" ? "opacity-70" : ""
              }
            >
              <CardHeader className="pb-2 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    {prescription.medication}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    Prescribed by {prescription.prescribedBy}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full capitalize ${
                    prescription.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {prescription.status}
                </span>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Dosage</p>
                    <p>{prescription.dosage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Frequency
                    </p>
                    <p>{prescription.frequency}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Start Date
                    </p>
                    <p>
                      {new Date(prescription.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      End Date
                    </p>
                    <p>{new Date(prescription.endDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Prescriptions;

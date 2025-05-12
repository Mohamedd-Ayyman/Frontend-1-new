
import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Example medical records data
const medicalRecords = [
  { id: 1, date: 'Apr 15, 2025', type: 'Lab Results', doctor: 'Dr. Johnson', description: 'Blood work results' },
  { id: 2, date: 'Mar 22, 2025', type: 'X-Ray', doctor: 'Dr. Williams', description: 'Chest X-ray' },
  { id: 3, date: 'Feb 10, 2025', type: 'Consultation', doctor: 'Dr. Chen', description: 'Annual checkup' },
];

// Example medical conditions
const conditions = [
  { condition: 'Hypertension', diagnosedDate: 'Jan 2023', status: 'Ongoing' },
  { condition: 'Arthritis', diagnosedDate: 'Mar 2021', status: 'Ongoing' },
];

// Example surgeries/procedures
const procedures = [
  { procedure: 'Appendectomy', date: 'Jun 15, 2020', hospital: 'General Hospital' },
];

const MedicalRecords = () => {
  const { toast } = useToast();
  // For demonstration purposes
  const userRole = 'patient';

  const handleDownload = (id: number) => {
    toast({
      title: "Downloading Record",
      description: `Medical record #${id} is being downloaded.`,
    });
  };

  return (
    <DashboardLayout userRole={userRole as 'admin' | 'staff' | 'patient'}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Medical Records</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Medical Conditions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" size={18} />
                Medical Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Condition</TableHead>
                    <TableHead>Diagnosed</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {conditions.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.condition}</TableCell>
                      <TableCell>{item.diagnosedDate}</TableCell>
                      <TableCell>{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Surgeries and Procedures */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" size={18} />
                Surgeries & Procedures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Procedure</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Hospital</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {procedures.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.procedure}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.hospital}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Medical Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" size={18} />
              Medical Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicalRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.type}</TableCell>
                    <TableCell>{record.doctor}</TableCell>
                    <TableCell>{record.description}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleDownload(record.id)}
                      >
                        <Download size={14} />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MedicalRecords;

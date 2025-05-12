
import React, { useState } from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Example appointment data
const initialAppointments = [
  { id: 1, date: 'May 10, 2025', time: '09:00 AM', doctor: 'Dr. Sarah Johnson', department: 'Cardiology', status: 'Confirmed' },
  { id: 2, date: 'May 15, 2025', time: '11:30 AM', doctor: 'Dr. Michael Chen', department: 'General Medicine', status: 'Pending' },
];

const Appointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const { toast } = useToast();
  // For demonstration purposes
  const userRole = 'patient';

  const handleCancelAppointment = (id: number) => {
    const updatedAppointments = appointments.map(appointment => 
      appointment.id === id ? {...appointment, status: 'Cancelled'} : appointment
    );
    setAppointments(updatedAppointments);
    toast({
      title: "Appointment Cancelled",
      description: "The appointment has been cancelled successfully.",
    });
  };

  const handleScheduleAppointment = () => {
    toast({
      title: "Schedule Appointment",
      description: "This would open the appointment scheduling dialog.",
    });
  };

  return (
    <DashboardLayout userRole={userRole as 'admin' | 'staff' | 'patient'}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Appointments</h1>
          <Button onClick={handleScheduleAppointment} className="flex items-center gap-2">
            <Calendar size={18} />
            Schedule New
          </Button>
        </div>

        <div className="rounded-lg border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.department}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {appointment.status !== 'Cancelled' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCancelAppointment(appointment.id)}
                      >
                        Cancel
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {appointments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6">
                    No appointments found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Appointments;

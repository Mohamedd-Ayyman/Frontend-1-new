import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Profile from "./pages/Profile";
import MedicalRecords from "./pages/MedicalRecords";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Prescriptions from "./pages/Prescriptions";
import NotFound from "./pages/NotFound";
import AdminPanel from "./pages/AdminPanel";
import DoctorPanel from "./pages/DoctorPanel";
import ReceptionistPanel from "./pages/ReceptionistPanel";
import CTScan from "./pages/Modalities/CTScan";
import MRIScan from "./pages/Modalities/MRIScan";
import Ultrasound from "./pages/Modalities/Ultrasound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/doctor" element={<DoctorPanel />} />
          <Route path="/receptionist" element={<ReceptionistPanel />} />
          <Route path="/modalities/ct-scan" element={<CTScan />} />
          <Route path="/modalities/mri-scan" element={<MRIScan />} />
          <Route path="/modalities/ultrasound" element={<Ultrasound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

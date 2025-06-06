import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  UserRound,
  FileText,
  Settings,
  LogOut,
  User,
  Users,
  Receipt,
  LayoutDashboard,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: "admin" | "staff" | "patient";
}

const DashboardLayout = ({
  children,
  userRole = "patient",
}: DashboardLayoutProps) => {
  const location = useLocation();
  const [staffRole, setStaffRole] = useState<"doctor" | "receptionist">(
    "doctor"
  );

  useEffect(() => {
    const storedStaffRole = localStorage.getItem("staffRole") as
      | "doctor"
      | "receptionist";
    if (storedStaffRole) {
      setStaffRole(storedStaffRole);
    }
  }, []);

  const getNavigation = () => {
    const dashboardItem = [
      {
        name: "Dashboard",
        href:
          userRole === "admin"
            ? "/admin"
            : userRole === "staff"
            ? `/${staffRole}`
            : "/dashboard",
        icon: LayoutDashboard,
      },
    ];

    if (userRole === "patient") {
      return [
        ...dashboardItem,
        { name: "Appointments", href: "/appointments", icon: Calendar },
        { name: "Medical Records", href: "/medical-records", icon: FileText },
        { name: "Prescriptions", href: "/prescriptions", icon: FileText },
        { name: "Billing", href: "/billing", icon: Receipt },
        { name: "Profile", href: "/profile", icon: UserRound },
        { name: "Settings", href: "/settings", icon: Settings },
      ];
    } else {
      return dashboardItem;
    }
  };

  const navigation = getNavigation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="bg-blue-700 text-white w-full md:w-64 flex-shrink-0">
        <div className="p-4 flex items-center justify-between md:justify-center">
          <Link to="/" className="text-xl font-bold">
            MediCare
          </Link>
          <button className="md:hidden">
            <span>≡</span>
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                      location.pathname === item.href
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-600"
                    }`}
                  >
                    <IconComponent size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Link
                to="/login"
                className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-blue-100 hover:bg-blue-600"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 flex items-center">
              <User size={16} className="mr-1" />
              <span className="capitalize">
                {userRole === "staff" ? staffRole : userRole} Account
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

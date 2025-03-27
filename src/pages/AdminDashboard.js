// src/pages/AdminDashboard.js
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar
        links={[
          { path: "/admin", label: "Dashboard" },
          { path: "/admin/users", label: "Manage Users" },
          { path: "/admin/reports", label: "View Reports" },
        ]}
      />
      <div className="flex-1 p-6">
        <Navbar title="Admin Dashboard" />
        <h2 className="text-2xl font-bold mt-6">Welcome, Admin!</h2>
        <p className="text-gray-700">Manage users and access reports.</p>
      </div>
    </div>
  );
}

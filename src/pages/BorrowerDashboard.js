// src/pages/BorrowerDashboard.js
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BorrowerDashboard() {
  return (
    <div className="flex">
      <Sidebar
        links={[
          { path: "/borrower", label: "Dashboard" },
          { path: "/borrower/apply", label: "Apply for Loan" },
          { path: "/borrower/my-loans", label: "My Loans" },
        ]}
      />
      <div className="flex-1 p-6">
        <Navbar title="Borrower Dashboard" />
        <h2 className="text-2xl font-bold mt-6">Welcome, Borrower!</h2>
        <p className="text-gray-700">Here you can apply for a loan and track your loans.</p>
      </div>
    </div>
  );
}

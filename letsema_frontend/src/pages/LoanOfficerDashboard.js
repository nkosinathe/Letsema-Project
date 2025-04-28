// src/pages/LoanOfficerDashboard.js
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function LoanOfficerDashboard() {
  return (
    <div className="flex">
      <Sidebar
        links={[
          { path: "/loan_officer", label: "Dashboard" },
          { path: "/loan_officer/review", label: "Review Applications" },
          { path: "/loan_officer/approved", label: "Approved Loans" },
        ]}
      />
      <div className="flex-1 p-6">
        <Navbar title="Loan Officer Dashboard" />
        <h2 className="text-2xl font-bold mt-6">Welcome, Loan Officer!</h2>
        <p className="text-gray-700">Review, approve, or reject loan applications.</p>
      </div>
    </div>
  );
}

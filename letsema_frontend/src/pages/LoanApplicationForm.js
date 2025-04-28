// src/pages/LoanApplicationForm.js
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function LoanApplicationForm() {
  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("Pending");  // Default status is Pending
  const [applicationDate, setApplicationDate] = useState(new Date().toLocaleDateString());  // Current date for application
  const [approvedDate, setApprovedDate] = useState("");  // Approved date starts empty
  const [approvedById, setApprovedById] = useState("");  // Approved by ID starts empty
  const [borrowerId, setBorrowerId] = useState("");  // Set borrower ID (you can fetch this from user data)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Normally, the data would be sent to the backend here via an API call
    alert(`
      Loan Application Submitted!
      Type: ${loanType}
      Amount: $${amount}
      Reason: ${reason}
      Status: ${status}
      Application Date: ${applicationDate}
      Approved Date: ${approvedDate || "N/A"}
      Approved By: ${approvedById || "N/A"}
      Borrower ID: ${borrowerId}
    `);
  };

  return (
    <div className="flex">
      <Sidebar
        links={[
          { path: "/borrower", label: "Dashboard" },
          { path: "/borrower/apply", label: "Apply for Loan" },
          { path: "/borrower/loans", label: "My Loans" },
        ]}
      />
      <div className="flex-1 p-6">
        <Navbar title="Apply for a Loan" />

        <div className="bg-white p-6 rounded-lg shadow-md mt-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Loan Application</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Loan Type Selection */}
            <div>
              <label className="block text-gray-600 mb-1">Loan Type</label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                required
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select Loan Type</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Home Loan">Home Loan</option>
              </select>
            </div>

            {/* Loan Amount Input */}
            <div>
              <label className="block text-gray-600 mb-1">Loan Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full p-2 border rounded-lg"
                placeholder="Enter amount"
              />
            </div>

            {/* Loan Reason Input */}
            <div>
              <label className="block text-gray-600 mb-1">Reason for Loan</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                className="w-full p-2 border rounded-lg"
                placeholder="Explain why you need this loan"
              />
            </div>

            {/* Borrower ID */}
            <div>
              <label className="block text-gray-600 mb-1">Borrower ID</label>
              <input
                type="text"
                value={borrowerId}
                onChange={(e) => setBorrowerId(e.target.value)}
                required
                className="w-full p-2 border rounded-lg"
                placeholder="Enter Borrower ID"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


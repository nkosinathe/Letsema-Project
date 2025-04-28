import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewApplications() {
  const [applications, setApplications] = useState([
    { id: 1, name: "John Doe", amount: 5000, status: "Pending" },
    { id: 2, name: "Jane Smith", amount: 10000, status: "Pending" },
    { id: 3, name: "Alice Johnson", amount: 7500, status: "Pending" }
  ]);

  const navigate = useNavigate();

  const updateStatus = (id, newStatus) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Review Loan Applications</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Applicant</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id} className="border">
              <td className="p-2 border">{app.name}</td>
              <td className="p-2 border">${app.amount}</td>
              <td className="p-2 border">{app.status}</td>
              <td className="p-2 border">
                {app.status === "Pending" && (
                  <>
                    <button 
                      className="px-3 py-1 mr-2 bg-green-500 text-white rounded"
                      onClick={() => updateStatus(app.id, "Approved")}
                    >
                      Approve
                    </button>
                    <button 
                      className="px-3 py-1 bg-red-500 text-white rounded"
                      onClick={() => updateStatus(app.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back to Loan Officer Dashboard Button */}
      <button
        onClick={() => navigate("/loan_officer")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Loan Officer Dashboard
      </button>
    </div>
  );
}

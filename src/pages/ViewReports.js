import { useNavigate } from "react-router-dom";

export default function ViewReports() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      
      <div className="border p-4 shadow-lg rounded-md bg-white">
        <h3 className="text-xl font-semibold mb-2">Loan Applications Report</h3>
        <p>Total Applications: 120</p>
        <p>Approved: 80</p>
        <p>Pending: 30</p>
        <p>Rejected: 10</p>
      </div>

      <div className="border p-4 shadow-lg rounded-md bg-white mt-4">
        <h3 className="text-xl font-semibold mb-2">User Report</h3>
        <p>Total Users: 50</p>
        <p>Active Users: 40</p>
        <p>Inactive Users: 10</p>
      </div>

      {/* Back to Admin Dashboard Button */}
      <button
        onClick={() => navigate("/admin")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Admin Dashboard
      </button>
    </div>
  );
}

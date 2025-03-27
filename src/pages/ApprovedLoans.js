import { useNavigate } from "react-router-dom";

export default function ApprovedLoans() {
  const navigate = useNavigate();

  const approvedLoans = [
    { id: 1, name: "John Doe", amount: 5000, date: "2024-03-10" },
    { id: 2, name: "Alice Johnson", amount: 7500, date: "2024-03-12" },
    { id: 3, name: "David Smith", amount: 12000, date: "2024-03-15" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Approved Loans</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Applicant</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Approval Date</th>
          </tr>
        </thead>
        <tbody>
          {approvedLoans.map(loan => (
            <tr key={loan.id} className="border">
              <td className="p-2 border">{loan.name}</td>
              <td className="p-2 border">${loan.amount}</td>
              <td className="p-2 border">{loan.date}</td>
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

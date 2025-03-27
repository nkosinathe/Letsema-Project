import { useNavigate } from "react-router-dom";

export default function MyLoans() {
  const navigate = useNavigate();

  const loans = [
    { id: 1, amount: "$5,000", status: "Approved", repayment: "12 months" },
    { id: 2, amount: "$2,500", status: "Pending", repayment: "6 months" },
    { id: 3, amount: "$10,000", status: "Rejected", repayment: "-" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Loans</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Loan Amount</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Repayment Period</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="border">
              <td className="p-2 border">{loan.amount}</td>
              <td className="p-2 border">{loan.status}</td>
              <td className="p-2 border">{loan.repayment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to go back to Borrower Dashboard */}
      <button
        onClick={() => navigate("/borrower")}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
      >
        Back to Dashboard
      </button>
    </div>
  );
}

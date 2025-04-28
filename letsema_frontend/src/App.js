import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";  // Import SignupPage
import BorrowerDashboard from "./pages/BorrowerDashboard";
import LoanApplicationForm from "./pages/LoanApplicationForm";
import LoanOfficerDashboard from "./pages/LoanOfficerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import ManageUsers from "./pages/ManageUsers";
import ViewReports from "./pages/ViewReports";
import ReviewApplications from "./pages/ReviewApplications";
import ApprovedLoans from "./pages/ApprovedLoans";
import MyLoans from "./pages/MyLoans";
import logo from './ba26cdef-f58f-4ff6-a202-56be6d9941e8.svg';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Letsema</h1>
          <p>We embrace your dreams of financial growth</p>
        </header>

        {/* Routes to different pages */}
        <Routes>
          {/* Login Page is the default route */}
          <Route path="/" element={<LoginPage />} />

          {/* Signup Page Route */}
          <Route path="/signup" element={<SignupPage />} /> {/* Add this route */}

          {/* Borrower Routes */}
          <Route path="/borrower" element={<BorrowerDashboard />} />
          <Route path="/borrower/apply" element={<LoanApplicationForm />} />
          <Route path="/borrower/my-loans" element={<MyLoans />} />

          {/* Loan Officer Routes */}
          <Route path="/loan_officer" element={<LoanOfficerDashboard />} />
          <Route path="/loan_officer/review" element={<ReviewApplications />} />
          <Route path="/loan_officer/approved" element={<ApprovedLoans />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/reports" element={<ViewReports />} />

          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}


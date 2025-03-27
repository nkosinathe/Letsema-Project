import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
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
    <Router> {/* ✅ Everything should be inside Router */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Letsema</h1>
          <p>We embrace your dreams of financial growth</p>
        </header>

        {/* Display the Login Form only on the Login route */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/borrower" element={<BorrowerDashboard />} />
          <Route path="/borrower/apply" element={<LoanApplicationForm />} />
          <Route path="/borrower/my-loans" element={<MyLoans />} />
          <Route path="/loan_officer" element={<LoanOfficerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} /> {/* ✅ 404 Route */}
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/reports" element={<ViewReports />} />
          <Route path="/loan_officer/review" element={<ReviewApplications />} />
          <Route path="/loan_officer/approved" element={<ApprovedLoans />} /> 
        </Routes>
      </div>
    </Router>
  );
}


{/*import logo from './ba26cdef-f58f-4ff6-a202-56be6d9941e8.svg';
import './App.css';
import LoginPage from "./pages/LoginPage"; // Import the Login component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div>
      <h1>Welcome to Letsema </h1>
      <p>This is the beginning of our microfinance system.
        {/* Display the Login Form 
      <LoginPage />
      </p>
      </div>
      </header>
    </div>
  );
}
export default App;
*/}
// src/App.js

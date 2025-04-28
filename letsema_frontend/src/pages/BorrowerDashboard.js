// src/pages/BorrowerDashboard.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BorrowerDashboard() {
  return (
    <div className="borrower-dashboard-container">
      <Sidebar
        links={[
          { path: "/borrower", label: "Dashboard" },
          { path: "/borrower/apply", label: "Apply for Loan" },
          { path: "/borrower/my-loans", label: "My Loans" },
        ]}
      />
      <div className="main-content">
        <Navbar title="Borrower Dashboard" />
        <h2 className="dashboard-header">Welcome, Borrower!</h2>
        <p>Here you can apply for a loan and track your loans.</p>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Apply for Loan</h3>
            <p>Click here to apply for a new loan.</p>
          </div>
          <div className="dashboard-card">
            <h3>My Loans</h3>
            <p>Track the status of your loan applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


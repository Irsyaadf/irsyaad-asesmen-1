import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuoteListPage from "./pages/QuoteListPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/quoteList" element={<QuoteListPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

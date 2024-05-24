import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizApp from "./page/QuizApp";
import ResultPage from "./page/ResultPage";
import Register from "./page/Register";
import Profile from "./page/Profile";
import Admin from "./page/Admin";
import ReportCard from "./page/ReportCard";
import ReportCardPage from "./page/ReportCardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="card" element={<ReportCard/>} />
        <Route path="reportcard" element={<ReportCardPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

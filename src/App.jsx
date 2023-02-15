import React from "react";
import Navbar from "./Componnents/navbar";
import HomePage from "./pages/home";
import PomodoroPage from "./pages/pomodoro";
import SettingsPage from "./pages/settings";
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="pomodoro" element={<PomodoroPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </>
  );
}

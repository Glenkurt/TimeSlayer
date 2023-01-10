import React, { useEffect, useState } from "react";
import Navbar from "./Componnents/navbar";
import HomePage from "./pages/home";
import PomodoroPage from "./pages/pomodoro";
import SettingsPage from "./pages/settings";
import { Routes, Route, Outlet } from "react-router-dom";


export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="pomodoro" element={<PomodoroPage />} />
          <Route path="settings" element={<SettingsPage />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. 
          <Route path="*" element={<NoMatch />} />*/}
      </Routes>
      </>
  );
}

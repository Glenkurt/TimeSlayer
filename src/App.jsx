import React, { useEffect, useState } from "react";
import Navbar from "./Componnents/navbar";
import Home from "./pages/home";
import Pomodoro from "./pages/pomodoro";
import Settings from "./pages/settings";
import { Routes, Route, Outlet } from "react-router-dom";


export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="pomodoro" element={<Pomodoro />} />
          <Route path="settings" element={<Settings />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. 
          <Route path="*" element={<NoMatch />} />*/}
      </Routes>
      </>
  );
}

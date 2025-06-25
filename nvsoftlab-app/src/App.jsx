import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DiceRoll from "./pages/DiceRoll";
import { createPageUrl } from "./utils";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={createPageUrl("Home")} element={<Home />} />
          <Route path={createPageUrl("DiceRoll")} element={<DiceRoll />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

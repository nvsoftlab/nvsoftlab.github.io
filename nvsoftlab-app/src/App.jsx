import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DiceRoll from "./pages/DiceRoll";
import { createPageUrl } from "./utils";

function LayoutWithLocation({ children }) {
  const location = useLocation();
  let currentPageName = "Home";

  if (location.pathname === createPageUrl("DiceRoll")) {
    currentPageName = "DiceRoll";
  } else if (location.pathname === createPageUrl("Home")) {
    currentPageName = "Home";
  }
  return <Layout currentPageName={currentPageName}>{children}</Layout>;
}

export default function App() {
  return (
    <Router>
      <LayoutWithLocation>
        <Routes>
          <Route path={createPageUrl("Home")} element={<Home />} />
          <Route path={createPageUrl("DiceRoll")} element={<DiceRoll />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </LayoutWithLocation>
    </Router>
  );
}

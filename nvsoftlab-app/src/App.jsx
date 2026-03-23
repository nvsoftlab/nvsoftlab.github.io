import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import DiceRoll from "./pages/DiceRoll";
import ExposedAI from "./pages/ExposedAI";
import HaveYouEver from "./pages/HaveYouEver";
import StrangeTruths from "./pages/StrangeTruths";
import PartyDeck from "./pages/PartyDeck";
import OtherApps from "./pages/OtherApps";
import Layout from "./Layout";
import ScrollToTop from "./components/ScrollToTop";
import TagManager from "react-gtm-module";
import { createPageUrl } from "./utils";
import useUTMTracking from "./hooks/useUTMTracking";

// TODO: import partyDeckLogo from "./assets/party-deck-logo.png";

const tagManagerArgs = {
  gtmId: "GTM-WBJFJT34",
};
TagManager.initialize(tagManagerArgs);

function Preloader() {
  useEffect(() => {
    const el = document.getElementById("preloader");
    const timer = setTimeout(() => {
      if (el) el.classList.add("done");
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader">
      {/* Replace the emoji below with:
          <img src={partyDeckLogo} alt="Party Deck" />
          once src/assets/party-deck-logo.png is added */}
      <div style={{ fontSize: 72 }}>🎉</div>
      <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
    </div>
  );
}

function LayoutWithLocation({ children }) {
  const location = useLocation();
  let currentPageName = "PartyDeck";

  if (location.pathname === "/" || location.pathname === createPageUrl("PartyDeck")) {
    currentPageName = "PartyDeck";
  } else if (location.pathname === createPageUrl("OtherApps")) {
    currentPageName = "OtherApps";
  } else if (location.pathname === createPageUrl("ExposedAI")) {
    currentPageName = "ExposedAI";
  } else if (location.pathname === createPageUrl("StrangeTruths")) {
    currentPageName = "StrangeTruths";
  } else if (location.pathname === createPageUrl("HaveYouEver")) {
    currentPageName = "HaveYouEver";
  } else if (location.pathname === createPageUrl("DiceRoll")) {
    currentPageName = "DiceRoll";
  }
  return <Layout currentPageName={currentPageName}>{children}</Layout>;
}

export default function App() {
  useUTMTracking();

  return (
    <>
      <Preloader />
      <Router>
        <ScrollToTop />
        <LayoutWithLocation>
          <Routes>
            <Route path="/" element={<PartyDeck />} />
            <Route path="/other-apps" element={<OtherApps />} />
            <Route path="/exposed-ai" element={<ExposedAI />} />
            <Route path="/strange-truths" element={<StrangeTruths />} />
            <Route path="/have-you-ever" element={<HaveYouEver />} />
            <Route path="/dice-roll" element={<DiceRoll />} />
            <Route path="*" element={<PartyDeck />} />
          </Routes>
        </LayoutWithLocation>
      </Router>
    </>
  );
}

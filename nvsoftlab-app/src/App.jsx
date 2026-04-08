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

const tagManagerArgs = {
  gtmId: "GTM-WBJFJT34",
};
TagManager.initialize(tagManagerArgs);

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

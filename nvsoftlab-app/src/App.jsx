import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import DiceRoll from "./pages/DiceRoll";
import HaveYouEver from "./pages/HaveYouEver";
import Home from "./pages/Home";
import Layout from "./Layout";
import ScrollToTop from "./components/ScrollToTop";
import TagManager from 'react-gtm-module';
import { createPageUrl } from "./utils";
import useUTMTracking from "./hooks/useUTMTracking";

const tagManagerArgs = {
  gtmId: 'GTM-WBJFJT34'
};
TagManager.initialize(tagManagerArgs);



function LayoutWithLocation({ children }) {
  const location = useLocation();
  let currentPageName = "Home";

  if (location.pathname === createPageUrl("Home")) {
    currentPageName = "Home";
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
    <Router>
      <ScrollToTop />
      <LayoutWithLocation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/have-you-ever" element={<HaveYouEver />} />
          <Route path="/dice-roll" element={<DiceRoll />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </LayoutWithLocation>
    </Router>
  );
}

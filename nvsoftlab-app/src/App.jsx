import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import DiceRoll from "./pages/DiceRoll";
import Home from "./pages/Home";
import Layout from "./Layout";
import TagManager from 'react-gtm-module';
import { createPageUrl } from "./utils";

const tagManagerArgs = {
  gtmId: 'GTM-WBJFJT34' 
};
TagManager.initialize(tagManagerArgs);


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

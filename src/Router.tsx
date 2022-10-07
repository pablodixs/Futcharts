import { Route, Routes } from "react-router-dom";

import { Camp } from "./pages/Camp";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="brasileirao" element={<Camp />} />
    </Routes>
  );
}

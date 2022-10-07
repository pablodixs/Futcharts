import { Route, Routes } from "react-router-dom";

import { Camp } from "./pages/Camp";
import { TablePage } from "./pages/Camp/TablePage";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="brasileirao">
        <Route path="/brasileirao/" element={<Camp />} />
        <Route path="/brasileirao/tabela" element={<TablePage />} />
      </Route>
    </Routes>
  );
}

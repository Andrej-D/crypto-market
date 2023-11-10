import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import DetailsPage from "./pages/DetailsPage";
import { GlobalAppRoute } from "./routes/GlobalAppRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GlobalAppRoute />}>
          <Route index element={<HomePage />} />
          <Route path="favorites/*" element={<ProtectedRoute />}>
            <Route index element={<FavoritesPage />} />
          </Route>
          <Route path="details/:symbol" exact element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplicationRoutes />);

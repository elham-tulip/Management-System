import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AllMembers from "../pages/AllMembers";
import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/members"
        element={
          <DashboardLayout>
            <AllMembers />
          </DashboardLayout>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/dashboard" />}
      />
    </Routes>
  );
}

export default AppRoutes;
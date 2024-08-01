import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRouteProps";
import Admin from "./components/Admin/Admin";
import ViewProfile from "./components/Profile/ViewProfile/Viewprofile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      {/* <Route path="/viewprofile" element={<ViewProfile />} /> */}
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;

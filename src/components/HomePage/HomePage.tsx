import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Destination from "../Destination/Destination";
import { Routes, Route, Outlet } from "react-router-dom";
import ViewProfile from "../Profile/ViewProfile/Viewprofile";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="" element={<Destination />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          
        </Routes>
      <Footer />
    </>
  );
};

export default HomePage;

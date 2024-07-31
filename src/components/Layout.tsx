import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Admin from './Admin/Admin1';
import CreateProfile from './CreateProfile/CreateProfile';

const Layout: React.FC = () => {
  return (
    <>
      
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
         
        </Routes>
        <Admin />
      {/* <CreateProfile /> */}
      </main>
     
    </>
  );
};

export default Layout;

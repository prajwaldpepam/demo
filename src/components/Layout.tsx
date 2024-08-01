import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Login/Login';
import Registration from './Registration/Registration';

import LandingPage from './HomePage/HomePage';

const Layout: React.FC = () => {
  return (
    <>
      
      <main>
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path='/home' element={<LandingPage />} />
        </Routes> */}
        {/* <Admin />  */}
       {/* <CreateProfile />   */}
       {/* <Viewprofile />  */}
      </main>
     
    </>
  );
};

export default Layout;

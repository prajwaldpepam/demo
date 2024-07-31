import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import "./App.css";
import Layout from "./components/Layout";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import Login from "./components/Login/Login";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
       
          <Layout />
       
      </BrowserRouter> 
    
    
    </>
  );
};

export default App;

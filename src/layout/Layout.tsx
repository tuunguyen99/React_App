import React from "react";
import ContainerLayout from "./ContainerLayout";
import Fetch from "./Fetch/Fetch";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import SideBar from "./SideBar";
//import './scss/layout.scss';

const Layout = () => {
  return (
  
    <div id="dashboard-container">
      
        <HeaderLayout />
        <SideBar />
        <ContainerLayout />
        <FooterLayout />
      
      </div>
      
  );
};

export default Layout;

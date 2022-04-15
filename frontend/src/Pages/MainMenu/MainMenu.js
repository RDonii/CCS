import React from 'react';
import MainComp from '../../Components/Main/mainComp';
import Article from '../../Components/Article/article'
import Catalogs from '../../Components/Catalogs/catalogs';
import Brands from '../../Components/Brands/brands'
import Services from '../../Components/Services/services'
import Project from '../../Components/Project/project'
import Location from '../../Components/Location/location'
import Connect from '../../Components/Connect/connect'
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';



function mainMenu() {
  return (
    <>
    <Header />
    <NavbarComponent/>
    <MainComp/> 
    <Article/>
    <Catalogs/>
    <Brands/>
    <Services/>
    <Project/>
    <Location/>
    <Connect/>
    <Footer/>
    </>
  );
}

export default mainMenu;

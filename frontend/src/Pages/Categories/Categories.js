import React from 'react';
import Connect from '../../Components/Connect/connect';
import Catalogs from '../../Components/Catalogs/catalogs';
import './Categories.css'
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';



function Categories() {
  return (
    <>
    <Header/>
    <NavbarComponent/>
    
    <div className="divide__class"></div>
    <Catalogs />
    <Connect />   
    <Footer/>
    </>
  );
}
  

export default Categories;

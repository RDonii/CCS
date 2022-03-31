import React from 'react';
import Connect from '../../Components/Connect/connect';
import Catalogs from '../../Components/Catalogs/catalogs';
import './Categories.css'
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';



function Categories() {
  return (
    <>
    <Header/>
    <NavbarComponent/>
    
    <div className="divide__class"></div>
    <Catalogs />
    <Connect />   

    </>
  );
}
  

export default Categories;

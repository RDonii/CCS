import React from 'react';
import Connect from '../../Components/Connect/connect';
import Header from '../../Components/Header/header';
import Location from '../../Components/Location/location';
import NavbarComponent from '../../Components/Navbar/navbar';
import './ContactsPage.css'


function ContactsPage() {
  return (
    <>
    <Header/>
    <NavbarComponent/>  
    <div className="divide__class"></div>
    <Connect/>   
    <Location/>

    </>
  );
}
  

export default ContactsPage;

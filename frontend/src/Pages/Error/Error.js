import React from 'react';
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';

function Error() {
  return (
    <>
    <Header/>
    <NavbarComponent/>
   <h1 className='text-center my-4'>Страница не найдена!!</h1>
       
    <Footer/>
    </>
  );
}
  

export default Error;

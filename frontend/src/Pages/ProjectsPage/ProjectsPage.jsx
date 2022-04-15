import React from 'react';
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';
import Project from '../../Components/Project/project';
import './ProjectsPage.css'


function ProjectsPage() {
  return (
    <>
    <Header/>
    <NavbarComponent/>
    <div id="project__page">
        
    </div>

    <Project/>
    <Footer/>
    </>
  );
}
  

export default ProjectsPage;

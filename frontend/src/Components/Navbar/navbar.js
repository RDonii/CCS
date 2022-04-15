import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link, NavLink, useParams} from 'react-router-dom'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import './navbar.css'
import { Basic_Url } from '../BasicUrl';
import { navbarAbout, navbarCatalog, navbarContacts, navbarHome, navbarProjects } from '../TextsLanguages';


function NavbarComponent() {

  const {language='ru'} = useParams()

  /* Texts Languages */
  const navbarHomeText = navbarHome.filter(item => Object.keys(item)==language)
  const navbarAboutText = navbarAbout.filter(item => Object.keys(item)==language)
  const navbarCatalogText = navbarCatalog.filter(item => Object.keys(item)==language)
  const navbarProjectsText = navbarProjects.filter(item => Object.keys(item)==language)
  const navbarContactsText = navbarContacts.filter(item => Object.keys(item)==language)
  /* /Texts Languages */

  const [currentSearch, setCurrentSearch] = useState('')
  const [catalogs, setCatalogs] = useState([])

    useEffect(()=>{
        getCategories()
    }, [])
    
    useEffect(()=>{
      getCategories()
    }, [language])

    function searching(e){
      let data = e.target.value
      setCurrentSearch(data)
    }

    async function getCategories(){
        const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/categories/').then((res)=>res.data)
        setCatalogs(data)
    }

  return (

    <>  
       <div id="navbar" className='d-flex'>{console.log()}
          <Navbar expand="lg"> 
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink  className='nav-link' to={"/"+(language ? language : 'ru')}>{Object.values(navbarHomeText[0]).join()}</NavLink>
                  <NavLink  className='nav-link' to={"/"+(language ? language : 'ru') + "/about"}>{Object.values(navbarAboutText[0]).join()}</NavLink>
                  <NavDropdown title={Object.values(navbarCatalogText[0]).join()} id="basic-nav-dropdown">
                    <NavLink data-rr-ui-dropdown-item="" className="dropdown-item" role="button" to={"/" +(language ? language : 'ru')+ "/categories"}>{Object.values(navbarHomeText[0]).join()}</NavLink>
                    {
                      catalogs.map(item =><Link data-rr-ui-dropdown-item="" className="dropdown-item" role="button" key={item.id} to={"/" +(language ? language : 'ru')+ "/categories/"+item.id}>{item.name} <br/></Link>)
                    }
                  </NavDropdown>
                  <NavLink  className='nav-link' to={"/" +(language ? language : 'ru')+ "/projects"}>{Object.values(navbarProjectsText[0]).join()}</NavLink>
                  <NavLink  className='nav-link' to={"/"+(language ? language : 'ru') + "/contacts"}>{Object.values(navbarContactsText[0]).join()}</NavLink>
                  <div className="d-flex languages">
                      <div className="row">
                          <div className="col d-flex">
                              <p className="text__red"><NavLink to={'/ru'}>RU</NavLink></p>
                            <div className="circle_red"></div>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col d-flex">
                              <p className="text__blue"><NavLink to={'/uz'}>UZ</NavLink></p>
                          <div className="circle_blue"></div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col d-flex">
                              <p  className="text__green"><NavLink to={'/eng'}>ENG</NavLink></p>
                            <div className="circle_green"></div>
                        </div>
                      </div>
                    </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <form className="d-flex">
              <input id='search' onChange={(e)=>searching(e)} required type="search" placeholder={(language=='ru' ? 'Найти' : language=='uz' ? 'Qidirish' : 'Searching')} aria-label="Search"/>
              <Link to={"/" +(language ? language : 'ru')+ "/search/"+currentSearch}> <input type="submit" disabled={(currentSearch ?  false : true)} value={(language=='ru' ? 'Поиск' : language=='uz' ? 'Qidiruv' : 'Search')}/> </Link> 
            </form>


    </div>
    </>
  );
}

export default NavbarComponent;


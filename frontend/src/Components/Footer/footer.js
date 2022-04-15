import React, { useEffect, useState } from 'react';
import './footer.css'
import logo from './Footer photos/CCS 6.png'
import { navbarAbout, navbarCatalog, navbarContacts, navbarHome, navbarProjects } from '../TextsLanguages';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Basic_Url } from '../BasicUrl';
import {Link, NavLink} from 'react-router-dom'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

function Footer() {

    const {language='ru'} = useParams()

    /* Texts Languages */
    const navbarHomeText = navbarHome.filter(item => Object.keys(item)==language)
    const navbarAboutText = navbarAbout.filter(item => Object.keys(item)==language)
    const navbarCatalogText = navbarCatalog.filter(item => Object.keys(item)==language)
    const navbarProjectsText = navbarProjects.filter(item => Object.keys(item)==language)
    const navbarContactsText = navbarContacts.filter(item => Object.keys(item)==language)
    /* /Texts Languages */

    const [infos, setInfos] = useState([])

    useEffect(()=>{
        getInfos()
    }, [])

    useEffect(()=>{
        getInfos()
    }, [language])

    async function getInfos(){
        const data = await axios.get(Basic_Url+'/api/' + (language ? language : 'ru') + '/info/').then((res)=>res.data)
        setInfos(data[0])
    }

  return (
    <>
      <footer>
    <div id="navbar_footer">
        
        <nav className="navbar navbar-expand-lg navbar-light ">
           
            <div className="container-fluid">
            <div className="logo">
                    <a href="#"><img src={logo} alt="logo"/></a>
            </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to={"/"+(language ? language : 'ru')}>{Object.values(navbarHomeText[0]).join()}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to={"/"+(language ? language : 'ru') + "/about"}>{Object.values(navbarAboutText[0]).join()}</NavLink>
                  </li>
                  <li id="dropdown" className="nav-item">
                    <div className="dropdown">
                        <NavLink to={"/"+(language ? language : 'ru') + "/categories"} className="dropdown">
                        {Object.values(navbarCatalogText[0]).join()}
                        </NavLink>

                        <div className="dropdown-menu">
                            <div data-toggle="collapse" data-target="#cardOne">
                            
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to={"/" +(language ? language : 'ru')+ "/projects"}>{Object.values(navbarProjectsText[0]).join()}</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to={"/"+(language ? language : 'ru') + "/contacts"}>{Object.values(navbarContactsText[0]).join()}</NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer__logos">
                <a href="https://t.me/ccslife2020"><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.facebook.com/groups/1146734162825530"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://instagram.com/ccslife.uz?igshid=YmMyMTA2M2Y="><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
        </nav>
        <div className="footer__info">
            <div className="row">
                <div className="footer__info-item col-lg-4">
                    <h2>{(language=='ru' ? 'Подробнее об услугах' : language=='uz' ? 'Xizmatlar haqida batafsil' : 'More about services')}</h2>
                    <h2 className="mt-4">{(language=='ru' ? 'Другие проекты' : language=='uz' ? 'Boshqa loyihalar' : 'Other projects')}</h2>
                    <h2 className="mt-4">{(language=='ru' ? 'Наша команда' : language=='uz' ? 'Bizning jamoa' : 'Our team')}</h2>
                </div>
                <div className="footer__info-item col-lg-4 col-md-6  col-sm-5">
                    <div className="text-content">
                        <div className="row first_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-solid fa-phone"></i>
                                    <div className="item__texts">
                                        <p>{infos.phone1}</p>
                                        <p>{infos.phone2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row second_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-brands fa-react"></i>
                                    <div className="item__texts">
                                        <p>{infos.schedule1}</p>
                                        <p>{infos.schedule2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__info-item col-lg-4  col-md-6 col-sm-7">
                    <div className="text-content_2">
                        <div className="row first_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-regular fa-envelope"></i>
                                    <div className="item__texts">
                                        <p>{infos.email1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row second_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="item__texts">
                                        <p>{infos.country}, {infos.city},</p>
                                        <p>{infos.district}, {infos.street}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <p>© Copyright 2022 D.Q.T. Все права защищены!</p>
        </div>
    </div>
</footer>
    </>
  );
}

export default Footer;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './header.css'
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import { Basic_Url } from '../BasicUrl';
import { headerApplication } from '../TextsLanguages';



function Header() {

    const {language ='ru'} = useParams()
 /* Texts Languages */
   const headerApplicationText = headerApplication.filter(item => Object.keys(item)==language)
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
      <header className="header__content-container">
        <div className="logo">
            <Link to={"/"+(language ? language : 'ru')} ><img src={logo} alt="logo"/></Link>
        </div>
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
        <div className="text-content_3">
            <div className="row first_item">
                <div className="col-md-12">
                    <button className="btn btn-outline-danger" type="button"><Link to={"/"+(language ? language : 'ru') + "/contacts"}>{Object.values(headerApplicationText[0]).join()}</Link></button>
                </div>
            </div>
            <div className="row second_item">
                <div className="col-md-12">
                    <h6><a href='#location'>{(language=='ru' ? 'Как добраться?' : language=='uz' ? 'Qanday boriladi?' : 'How to get there?')}</a></h6>
                </div>
            </div>
        </div>
    </header>
    </>
  );
}

export default Header;

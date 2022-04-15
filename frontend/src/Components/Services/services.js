import React from 'react';
import './services.css'
import img from './Services photos/1.png'
import img2 from './Services photos/2.png'
import img3 from './Services photos/3.png'
import logo from './Services photos/Vector (1)1.png'
import logo2 from './Services photos/Vector (1).png'
import logo3 from './Services photos/Vector2.png'
import { useParams } from 'react-router-dom';
import { servicesFirstContent, servicesHeader, servicesSecondContent } from '../TextsLanguages';



function Services() {

    const {language='ru'} = useParams()

    /* Texts Languages */
  const servicesHeaderText = servicesHeader.filter(item => Object.keys(item)==language)
  const servicesFirstText = servicesFirstContent.filter(item => Object.keys(item)==language)
  const servicesSecondText = servicesSecondContent.filter(item => Object.keys(item)==language)
  /* /Texts Languages */


  return (
    <>
    <section className="services__content-container" id="services">
        <h2>{(language=='ru' ? 'УСЛУГИ' : language=='uz' ? 'Xizmatlar' : 'Services')}</h2>
        <div className="services__photos row">
            <div className="services__photos__item col-lg-7 col-md-12">
                <img src={img} alt="img"/>
            </div>
            <div className="services__photos__items col-lg-4 col-md-12 col-sm-12">
                <img src={img2} alt="img"/>
                <img src={img3} alt="img"/>
            </div>
        </div>
        <h4>{Object.values(servicesHeaderText[0]).join()}</h4>
        <div className="services__about d-flex">
            <div className="services__about-logo">
                <img src={logo} alt="logo"/>
                <img src={logo2} alt="logo"/>
            </div>
            <div className="services__about-text">
                <h5>{(language=='ru' ? 'Безупречное качество' : language=='uz' ? 'Benuqson sifat' : 'Impeccable quality')}</h5>
                <p>{Object.values(servicesFirstText[0]).join()}</p>
            </div>
        </div>
        <div className="services__about services_second d-flex">
            <div className="services__about-logo">
                <img src={logo3} alt="logo"/>
            </div>
            <div className="services__about-text">
                <h5>{(language=='ru' ? 'С нами вы сможете все' : language=='uz' ? 'Biz bilan siz hamma narsani qila olasiz' : 'With us you can do everything')}</h5>
                <p>{Object.values(servicesSecondText[0]).join()}</p>
            </div>
        </div>
       
    </section>
    </>
  );
}

export default Services;

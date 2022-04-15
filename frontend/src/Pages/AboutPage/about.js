import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Connect from '../../Components/Connect/connect';
import './about.css'
import background from './About/main.png'
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';
import { Basic_Url } from '../../Components/BasicUrl';
import Footer from '../../Components/Footer/footer';
import { useParams } from 'react-router-dom';
import { AboutHistory, AboutPageHeader, AboutQualityOne, AboutQualitySecond } from '../../Components/TextsLanguages';


function About() {

    const {language='ru'} = useParams()

        /* Texts Languages */
        const AboutPageHeaderText = AboutPageHeader.filter(item => Object.keys(item)==language)
        const AboutHistoryText = AboutHistory.filter(item => Object.keys(item)==language)
        const AboutQualityOneText = AboutQualityOne.filter(item => Object.keys(item)==language)
        const AboutQualitySecondText = AboutQualitySecond.filter(item => Object.keys(item)==language)
        /* /Texts Languages */

    const [certificates, setSertificates] = useState([])
    useEffect(()=>{
        getSertificates()
    }, [])

    async function getSertificates(){
        const data = await axios.get(Basic_Url+'/api/' + language + '/certificates/').then((res)=>res.data)
        setSertificates(data)
    }


  return (
    <>
    <Header/>
    <NavbarComponent/>
        <section id="about">
                <main className="about__main">
                    <img src={background} alt="" />
                    <h1>{(language=='ru' ? 'РАБОТАТЬ С НАМИ ВАМ БУДЕТ ВЫГОДНО' : language=='uz' ? "BiZ BILAN ISHLASH SIZGA QULAY BO’ladi" : 'YOU WILL BE FAVORABLE TO WORK WITH US')}</h1>
                </main>
            
            <section className="about__text-content">
                <p> <span> <strong> «Comfort Cooling Service» </strong></span> - {(language=='ru' ? 'это:' : language=='uz' ? "bu:" : 'this:')}  <br/> <br/>
                {Object.values(AboutPageHeaderText[0]).join()}</p>
            </section>

            <section className="about__image-content about__content-container">
                <div className="image-container">
                    <h2>{(language=='ru' ? 'СЕРТИФИКАТЫ:' : language=='uz' ? "SERTIFIKATLAR:" : 'CERTIFICATES:')}</h2>
                    <div className="row">
                        {
                            certificates.map(item => <div className="col-lg-2 col-md-3 col-sm-5 img-block" key={item.id}> <img src={item.img} alt={item.title} /> </div>)
                        }   

                    </div>
                </div>
            </section>
            
            <div className="about__history about__content-container">
                <h2>{(language=='ru' ? 'ИСТОРИЯ КОМПАНИИ' : language=='uz' ? "KOMPANIYA TARIXI" : 'HISTORY OF COMPANY')}</h2>
                <p>{(language=='ru' ? 'Оптимальное соотношение цены и качества' : language=='uz' ? "Narx va sifatning optimal nisbati" : 'The optimum ratio of price and quality')} <br/>
                {Object.values(AboutHistoryText[0]).join()} </p>
            </div>

            <div className="about__quality about__content-container">
                <h2>{(language=='ru' ? 'КАЧЕСТВО' : language=='uz' ? "SIFAT" : 'QUALITY')}</h2>
                <p>{Object.values(AboutQualityOneText[0]).join()} <br/><br/>
                {Object.values(AboutQualitySecondText[0]).join()}  
                    </p>
            </div>
            

        </section>
    <Connect/>
    <Footer/>
    </>
  );
}

export default About;

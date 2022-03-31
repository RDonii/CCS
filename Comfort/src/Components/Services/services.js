import React from 'react';
import './services.css'
import img from './Services photos/1.png'
import img2 from './Services photos/2.png'
import logo from './Services photos/Vector (1)1.png'
import logo2 from './Services photos/Vector (1).png'
import logo3 from './Services photos/Vector2.png'



function Services() {
  return (
    <>
    <section className="services__content-container" id="services">
        <h2>УСЛУГИ</h2>
        <div className="services__photos row">
            <div className="services__photos__item col-lg-7 col-md-12">
                <img src={img} alt="img"/>
            </div>
            <div className="services__photos__items col-lg-4 col-md-12 col-sm-12">
                <img src={img2} alt="img"/>
                <img src={img2} alt="img"/>
            </div>
        </div>
        <h4>
            CCS Comfort Cooling Service - лучший Поставщик промышленного оборудования в городе Ташкент. Мы заботимся о 
            потребностях покупателей и стремимся обеспечить лучшее обслуживание каждому клиенту. 
        </h4>
        <div className="services__about d-flex">
            <div className="services__about-logo">
                <img src={logo} alt="logo"/>
                <img src={logo2} alt="logo"/>
            </div>
            <div className="services__about-text">
                <h5>Безупречное качество</h5>
                <p>Продукции компании Название компании отличается высочайшей надежностью. Мы сами используем технику и 
                    инструменты этой фирмы и всегда довольны качеством, производительносьтю и долговечносьтю. Мы гордимся тем, что 
                    продаем продукцию.
                </p>
            </div>
        </div>
        <div className="services__about services_second d-flex">
            <div className="services__about-logo">
                <img src={logo3} alt="logo"/>
            </div>
            <div className="services__about-text">
                <h5>С нами вы сможете все</h5>
                <p>CCS Comfort Cooling Service компании нет равных в отрасли. Этот бренд предлагает для строительства и 
                    промышленности и продукцию высочайшего качества. За все годы работы компания "" CCS Comfort Cooling Service "" 
                    не получила ни одной жалобы на продукцию Название компании. Вот что такое настоящее качесиво!
                </p>
            </div>
        </div>
       
    </section>
    </>
  );
}

export default Services;

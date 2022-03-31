import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Connect from '../../Components/Connect/connect';
import './about.css'
import background from './About/main.png'
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';
import { Basic_Url } from '../../Components/BasicUrl';


function About() {

    const [certificates, setSertificates] = useState([])
    useEffect(()=>{
        getSertificates()
    }, [])

    async function getSertificates(){
        const data = await axios.get(Basic_Url+'/api/ru/certificates/').then((res)=>res.data)
        setSertificates(data)
    }


  return (
    <>
    <Header/>
    <NavbarComponent/>
        <section id="about">
                <main className="about__main">
                    <img src={background} alt="" />
                    <h1>РАБОТАТЬ С НАМИ ВАМ БУДЕТ ВЫГОДНО</h1>
                </main>
            
            <section className="about__text-content">
                <p> <span> <strong> «Comfort Cooling Service» </strong></span> - это: <br/> <br/>

                    Возможность купить самые качественные отопительные устройства для Вашего дома, <br/>
                    товары от ведущих мировых брендов, которые имеют сотни положительных отзывов, <br/>
                    возможность получить рекомендации по установке техники и ее дальнейшей эксплуатации, <br/>
                    отопительная техника, тепло- и звукоизоляционные материалы по приемлемым ценам от официального 
                    дистрибьютора,
                    гарантийные обязательства как от производителя, так и от компании. <br/>
                    Планируя использовать в своем доме тепло- или звукоизоляционные материалы, Вы имеете возможность купить 
                    все необходимое по самым доступным ценам именно у нас! Благодаря удобным условиям, отличному качеству 
                    продукции, и высокой репутации представленных брендов Вы можете быть уверены, что приобретаете лучшее 
                    из представленного на рынке. <br/> <br/>
                    
                    Квалифицированные консультанты в сочетании с высоким качеством товаров позволили нам создать довольно 
                    широкую клиентскую базу и регулярно получать массу положительных отзывов! Мы уверены, обратившись к нам, и 
                    Вы, непременно, оставите свой отзыв об удачной покупке!</p>
            </section>

            <section className="about__image-content about__content-container">
                <div className="image-container">
                    <h2>СЕРТИФИКАТЫ</h2>
                    <div className="row">
                        {
                            certificates.map(item => <div className="col-lg-2 col-md-3 col-sm-5 img-block" key={item.id}> <img src={item.img} alt={item.title} /> </div>)
                        }   

                    </div>
                </div>
            </section>
            
            <div className="about__history about__content-container">
                <h2>ИСТОРИЯ КОМПАНИИ</h2>
                <p>Оптимальное соотношение цены и качества <br/>
                    За годы работы компания «Сomfort Cooling Service» приобрела репутацию в Узбекистане. Основатель 
                    компании Давлетов Азамат Аминович открыл свой бизнес в 2014 году, вложив в него огромный опыт 
                    работы в строительной отрасли. Сегодня «Сomfort Cooling Service» является одним из ведущих 
                    поставщиков высококачественных материалов и оборудования, а также предлагает полный спектр услуг 
                    по самым конкурентоспособным ценам.
                    </p>
            </div>

            <div className="about__quality about__content-container">
                <h2>КАЧЕСТВО</h2>
                <p>Критерии качества, инноваций, индивидуальных решений, а также укрепление партнерских связей, постоянное улучшение 
                    обслуживания, передовое мышление, стремление быть на шаг впереди конкурентов, осознание важности охраны окружающей 
                    среды формируют четкую философию «Сomfort Cooling Service». <br/> <br/>
                    
                    Качество - это критерий, который рассматривается нашими клиентами, как основной, и является определяющим фактором 
                    конкурентоспособности продукции Теплоклимат. В связи с этим действия рабочего персонала, оптимизация и оценка производства 
                    на предприятии, в первую очередь направлены на повышение качества. «Сomfort Cooling Service» всегда с вниманием относится к 
                    требованиям и пожеланиям наших партнеров.
                    </p>
            </div>
            

        </section>
<Connect/>
    </>
  );
}

export default About;

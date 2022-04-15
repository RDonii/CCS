import React, { useEffect, useState } from 'react';
import './brands.css'
import axios from 'axios'
import BrandsPattern from './BrandsPattern';
import logo from './Brands/logo.png'
import { Basic_Url } from '../BasicUrl';
import { useParams } from 'react-router-dom';
import { brandsContent} from '../TextsLanguages';


function Brands() {


    const {language='ru'} = useParams()

    /* Texts Languages */
    const brandsText = brandsContent.filter(item => Object.keys(item)==language)
    /* /Texts Languages */

    const [brands, setBrands] = useState([])

    useEffect(()=>{
        getBrands()
    }, [])

    async function getBrands(){
        const data = await axios.get(Basic_Url+'/api/ru/brands/').then((res)=>res.data)
        setBrands(data)
    }

  return (
    <>
        <section className="brands__content-container" id="brands">
            <h2>{(language=='ru' ? 'БРЕНДЫ' : language=='uz' ? 'Brendlar' : 'Brands')}</h2>
            <p>{(language=='ru' ? 'Гарантия качества' : language=='uz' ? 'Sifatli kafolat' : 'Quality assurance')}</p>
            <div className="row">
                {
                    brands.map(item => <BrandsPattern key={item.id} name={item.id} img={item.img}/>)
                }
            </div>
            <div className="brands__about d-flex">
                <div className="brands__photo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="brands__text-content">
                    <p>Comfort <span>Cooling</span> <span>Service</span></p>
                    <p>{Object.values(brandsText[0]).join()}</p>
                </div>
            </div>
        </section>
    </>
  );
}

export default Brands;

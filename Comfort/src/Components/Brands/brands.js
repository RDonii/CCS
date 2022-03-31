import React, { useEffect, useState } from 'react';
import './brands.css'
import axios from 'axios'
import BrandsPattern from './BrandsPattern';
import logo from './Brands/logo.png'
import { Basic_Url } from '../BasicUrl';


function Brands() {

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
            <h2>БРЕНДЫ</h2>
            <p>Гарантия качества</p>
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
                    <p>Компания "" CCS Comfort Cooling Service "" работает с этим надежным 
                        брендом с момента основания в 2000 году. Производитель предлагает 
                        большой ассортеимент продукции: от проводки и кабелей до тяжелых станков.</p>
                </div>
            </div>
        </section>
    </>
  );
}

export default Brands;

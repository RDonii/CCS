import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './catalog.css'
import CatalogPattern from './CatalogPattern';
import { Link, useParams } from 'react-router-dom';
import { Basic_Url } from '../BasicUrl';



function Catalogs() {

    const {language} = useParams()
    const [catalogs, setCatalogs] = useState([])

    useEffect(()=>{
        getCategories()
    }, [])
    useEffect(()=>{
        getCategories()
    }, [language])

    async function getCategories(){
        const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/categories/').then((res)=>res.data)
        setCatalogs(data)
    }

  return (
    <>
     <section className="catalogs__content-container" id="catalogs">
        <h2>КАТАЛОГ ТОВАРОВ</h2> 
        <p>У нас вы найдете огромный выбор строителных материалов и специального промышленного обородования:
            системы вентилатции, кондиционирования, отопления, охлаждения, пожарную систему и запчасти.
        </p>
        <div className="row">
            {
               catalogs.map(item => <CatalogPattern img={item.img} key={item.id} id={item.id} name={item.name} description={item.description}/>) 
            }
            

        </div>
        <button className="btn btn-outline-info" type="button"><Link className='nav-link' to={"/" +(language ? language : 'ru')+ "/categories"}>Подробнее</Link></button>
    </section>
    </>
  );
}


export default Catalogs;

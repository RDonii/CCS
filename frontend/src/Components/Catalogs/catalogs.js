import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './catalog.css'
import CatalogPattern from './CatalogPattern';
import { Link, useParams } from 'react-router-dom';
import { Basic_Url } from '../BasicUrl';
import { catalogContent, catalogHeader, readMore } from '../TextsLanguages';



function Catalogs() {

    const {language='ru'} = useParams()

    /* Texts Languages */
    const readMoreText = readMore.filter(item => Object.keys(item)==language)
    const catalogHeaderText = catalogHeader.filter(item => Object.keys(item)==language)
    const catalogContentText = catalogContent.filter(item => Object.keys(item)==language)
    /* /Texts Languages */
    

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
        <h2> {Object.values(catalogHeaderText[0]).join()} </h2>  
        <p> {Object.values(catalogContentText[0]).join()} </p>
        <div className="row">
            {
               catalogs.map(item => <CatalogPattern img={item.img} key={item.id} id={item.id} name={item.name} description={item.description}/>) 
            }
            

        </div>
        <button className="btn btn-outline-info" type="button"><Link className='nav-link' to={"/" +(language ? language : 'ru')+ "/categories"}>{Object.values(readMoreText[0]).join()} </Link></button>
    </section>
    </>
  );
}


export default Catalogs;

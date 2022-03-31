import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Connect from '../../../Components/Connect/connect';
import './CategoriesList.css'
import CategoriesListPattern from './CategoriesListPattern';
import Header from '../../../Components/Header/header';
import NavbarComponent from '../../../Components/Navbar/navbar';
import { Basic_Url } from '../../../Components/BasicUrl';





function CategoriesList() {
    
    const {id, language} = useParams()
    const [categories, setCategories] = useState([])
    const [categoriesName, setCategoriesName] = useState([])
  


    useEffect(()=>{
        getCategories()
        getCategoriesName()
    }, [])

    useEffect(()=>{
      getCategories()
      getCategoriesName()
  }, [id])
   

    async function getCategories(){
        const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/categories/'+id+'/products').then((res)=>res.data)
        setCategories(data)
    }

    async function getCategoriesName(){
      const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/categories/'+id).then((res)=>res.data)
      setCategoriesName(data)
  }

    


  return (
    <>
    <Header/>
    <NavbarComponent/>
    <section id="categoriesList">
        <h2>КАТАЛОГ ТОВАРОВ ИЗ Все категории</h2>  
        <h3>{categoriesName.name}</h3>
        <p>У нас вы найдете огромный выбор строителных материалов и специального промышленного обородования:
            системы вентилатции, кондиционирования, отопления, охлаждения, пожарную систему и запчасти.
        </p>
     
      {
         categories.map(item => <CategoriesListPattern category={item.category} img={item.main_img} id={item.id} key={item.id} name={item.name} description={item.description.slice(0, 120)}/>) 
      }
    
    </section>
    <Connect/>
    </>
  );
}

export default CategoriesList;

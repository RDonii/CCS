import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import '../CategoriesList.css'
import CategoriesListPattern from '../CategoriesListPattern';
import Connect from '../../../../Components/Connect/connect';
import telegram from './Vector.png'
import vector1 from './Vector1.png'
import vector2 from './Vector2.png'
import vector3 from './Vector3.png'
import Header from '../../../../Components/Header/header';
import NavbarComponent from '../../../../Components/Navbar/navbar';
import { Basic_Url } from '../../../../Components/BasicUrl';


function CategoriesItem() {
    
    const {id, category, language} = useParams()
    const [names, setNames] = useState([]) 
    const [categories, setCategories] = useState([])
    const [categorieItem, setCategorieItem] = useState([])
    const [categorieImages, setCategorieImages] = useState([])
  


    useEffect(()=>{
        getNames()
        getCategories()
        getCategorieItem()
        getCategorieImages()
    }, [])

    useEffect(()=>{
      getNames()
      getCategories()
      getCategorieItem()
      getCategorieImages()
    }, [category])

    async function getNames(){
      const data = await axios.get(Basic_Url+'/api/' +language+ '/categories/'+id).then((res)=>res.data)
      setNames(data)
  }
    async function getCategories(){
        const data = await axios.get(Basic_Url+'/api/' +language+ '/categories/'+id+'/products').then((res)=>res.data)
        setCategories(data)
    }
    async function getCategorieItem(){
      const data = await axios.get(Basic_Url+'/api/' +language+ '/categories/'+id+'/products/'+category).then((res)=>res.data)
      setCategorieItem(data)
    }
    async function getCategorieImages(){
      const data = await axios.get(Basic_Url+'/api/' +language+ '/categories/'+id+'/products/'+category+'/imgs').then((res)=>res.data)
      setCategorieImages(data)
    }

    
  return (
    <>
    <Header/>
    <NavbarComponent/>
    <section id="categoriesList"> 
        <h2>КАТАЛОГ ТОВАРОВ ИЗ Все категории</h2>
        <h3>{names.name}</h3>
        <h4>{categorieItem.name}</h4>
        <div id="image__box">
          <div className="row">
            <div className="col-lg-5 image__box-content">
                <img src={categorieItem.main_img} alt='logo' />
                <div className="row image__box-items">
                  {
                    categorieImages.map(item => <div key={item.id} className="col-lg-4 col-md-4 col-sm-4 image__box-item"> <img src={item.img} alt='logo' /></div>)
                  }
                </div>
            </div>  
            <div className="col-lg-6 image__box-texts">
                <button type='button'> <img src={telegram} alt="logo" /><Link to={"/"+(language ? language : 'ru') + "/about"}> Оставить заявку</Link></button>
                <button type='button'> ПОКАЗАТЬ ТЕЛЕФОН</button>
                <div className="image__box-texts-content">
                  <div className='image__box-texts-content-item'><img src={vector1} alt="logo"/><p>Правила безопасной сделки</p></div>
                  <div className='image__box-texts-content-item'><img src={vector2} alt="logo"/><p>Вернуться в категорию</p> <Link to={"/"+(language ? language : 'ru') + "/categories/"+id}>{names.name}</Link></div>
                  <div className='image__box-texts-content-item'><img src={vector3} alt="logo"/><p>Дата последнего обновления: 28.02.2022</p></div>
                </div>
            </div>
          </div>
          <p>{categorieItem.description}</p>
        </div>
        <h5>Похожие предложения от “CSS Comfort Cooling Service” OOO</h5>
      {
          categories.map(item => <CategoriesListPattern category={item.category} img={item.main_img} id={item.id} key={item.id} name={item.name} description={item.description.slice(0, 120)}/>)
      }
        
       
        

    </section>
    <Connect/>
    </>
  );
}

export default CategoriesItem;

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/header';
import NavbarComponent from '../../Components/Navbar/navbar';
import './SearchPage.css'
import SearchCategories from './SearchCategories';
import SearchProduct from './SearchProduct';
import SearchProjects from './SearchProjects';
import { Basic_Url } from '../../Components/BasicUrl';
import Footer from '../../Components/Footer/footer';


function SearchPage() {

  const {language, searchObject} = useParams()
  const [categories, setSetcategories] = useState([])
  const [products, setProducts] = useState([])
  const [projects, setProjects] = useState([])



  useEffect(()=>{
    getSearch()
  }, [])

  useEffect(()=>{
    getSearch()
  }, [searchObject])

  async function getSearch(){
    const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/searching/?search='+searchObject).then((res)=>res.data)

    setSetcategories(data.categories)
    setProducts(data.products)
    setProjects(data.projects)
  }

  return (
    <>
    <Header/>
    <NavbarComponent/>
    <div id="search">
      
      <div className="search-categories">
        <h4>Найдены элементы при поиске "{searchObject}": Категории: {categories.length}, Продукты: {products.length},  
          Проекты: {projects.length}
        </h4>
        {
          categories.map(item => <SearchCategories key={item.id} name={item.name} img={item.img} description={item.description} id={item.id}/>) 
        }
      </div>

      <div id='categoriesList' className="my-4">
        {
          products.map(item => <SearchProduct category={item.category} img={item.main_img} id={item.id} key={item.id} name={item.name} description={item.description.slice(0, 120)}/>)
        }
      </div>

      <div className="projects__content-container" id="projects">
       <div className="row"> 
            {
                projects.map(item => <SearchProjects key={item.id} description={item.description} id={item.id} img={item.main_img} name={item.name}/>)
            }    
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
  

export default SearchPage;

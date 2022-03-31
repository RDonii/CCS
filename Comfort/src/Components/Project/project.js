import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams, } from 'react-router-dom';
import './project.css'
import SearchProjects from '../../Pages/SearchPage/SearchProjects';
import { Basic_Url } from '../BasicUrl';



function Project() {
    const {language} = useParams()
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        getProjects()
    }, [])
    
    useEffect(()=>{
        getProjects()
    }, [language])

    async function getProjects(){
        const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/projects/').then((res)=>res.data)
        setProjects(data)
    }
  return (
    <>
     <section className="projects__content-container" id="projects">
        <h2>наши Проекты</h2>
        <div className="row">
            {
                projects.map(item => <SearchProjects key={item.id} description={item.description} id={item.id} img={item.main_img} name={item.name}/>)
            }    
        </div>
    </section>
    </>
  );
}

export default Project;

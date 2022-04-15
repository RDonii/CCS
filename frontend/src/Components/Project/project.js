import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams, } from 'react-router-dom';
import './project.css'
import SearchProjects from '../../Pages/SearchPage/SearchProjects';
import { Basic_Url } from '../BasicUrl';
import ProjectsPattern from './ProjectsPattern';



function Project() {
    const {language='ru'} = useParams()
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
        <h2>{(language=='ru' ? 'наши Проекты' : language=='uz' ? 'Bizning loyihalarimiz' : 'Our projects')}</h2>
        <div className="row">
            {
                projects.map(item => <ProjectsPattern key={item.id} description={item.description} id={item.id} img={item.main_img} name={item.name}/>)
            }    
        </div>
    </section>
    </>
  );
}

export default Project;

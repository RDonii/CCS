import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams} from 'react-router-dom';
import Header from '../../../Components/Header/header';
import NavbarComponent from '../../../Components/Navbar/navbar';
import './ProjectsPageItem.css'
import ProjectsPageItemPattern from './ProjectsPageItemPattern';
import { Basic_Url } from '../../../Components/BasicUrl';
import Footer from '../../../Components/Footer/footer';



function ProjectsPageItem() {
  const {language='ru', id} = useParams()

      const [project, setProject] = useState([])
      const [projectItem, setProjectItem] = useState([])
      const [projectItemImg, setProjectItemImg] = useState([])
      
      useEffect(()=>{
          getProject()
          getProjectItem()
          getProjectItemImg()
      }, [])

      useEffect(()=>{
          getProject()
          getProjectItem()
          getProjectItemImg()
      }, [id])

      async function getProject(){
        const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/projects/').then((res)=>res.data)
        setProject(data)
      }

      async function getProjectItem(){
        const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/projects/'+id).then((res)=>res.data)
        setProjectItem(data)
      }

      async function getProjectItemImg(){
          const data = await axios.get(Basic_Url+'/api/' +(language ? language : 'ru')+ '/projects/'+id+'/imgs').then((res)=>res.data)
          setProjectItemImg(data)
      }

  return (
    <>
    <Header/>
    <NavbarComponent/>
    <div id="project__page-item" className='projects-item__content-container'>
       <h2>{(language=='ru' ? 'наши Проекты' : language=='uz' ? "Bizning loyihalar" : 'Our projects')}</h2>
       <div className="row image__block">
         <img src={projectItem.main_img} alt="image" />
         {
           projectItemImg.map(item => <div key={item.id} className="col-6"><img src={item.img} alt="image" /></div>)
         }
       </div>


          <p>{projectItem.text}</p>


        <div className="projects__image-block">
            <div className="row">
              {
                project.map(item => <ProjectsPageItemPattern id={item.id} key={item.id} description={item.description} img={item.main_img}/>)
              }
            </div>
        </div>

    </div>
    <Footer/>
    </>
  );
}
  

export default ProjectsPageItem;

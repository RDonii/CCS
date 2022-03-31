import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectsPageItem.css'



function ProjectsPageItemPattern({description, img, id}) {

    const {language} = useParams()
  

  return (
    <>
        <div className="projects__image-block-item col-lg-4">
            <img src={img} alt="logo" />
            <p><Link to={'/'+language+'/projects/'+id}> {description}</Link></p>
        </div>

    </>
  );
}
  

export default ProjectsPageItemPattern;

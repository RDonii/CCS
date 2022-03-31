import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SearchPage.css'



function SearchProjects({id, img, description}) {
     const {language} = useParams()
     
  return (
    <>
            <div className="col-lg-6">
                <img src={img} alt="img"/>
                <p><Link to={"/" + (language ? language  : 'ru') + "/projects/"+id}>{description}</Link></p>
            </div>
    </>
  );
}

export default SearchProjects;

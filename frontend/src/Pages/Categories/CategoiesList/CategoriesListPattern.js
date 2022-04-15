import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoriesList.css'
import {Link} from 'react-router-dom'
import { readMore } from '../../../Components/TextsLanguages';


function CategoriesListPattern({name, description, img, category, id}) {

  const {language} = useParams()
  const readMoreText = readMore.filter(item => Object.keys(item)==language)
  
  return (
    
    <>
        <div className="row"> 
            <div className="col-lg-3 categories__item">
                <img src={img} alt="logo" />
            </div>
            <div className="col-lg-7 categories__item">
                <h4>{name}</h4>
                <p>{description}...</p>
                <p>{(language==='ru' ? 'Телефон' : language==='uz' ? 'Aloqa': 'Phone number')} +(998 97)  485 33 32</p>
            </div>
            <div className="col-lg-2 col-sm-12 categories__item">
                 <button className='btn btn-primary'><Link to={'/'+language+'/categories/'+category+'/products/'+id}>{Object.values(readMoreText[0]).join()}</Link></button>
            </div>
        </div>

    </>
  );
}

export default CategoriesListPattern;

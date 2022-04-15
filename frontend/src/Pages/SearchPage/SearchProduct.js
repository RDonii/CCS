import React from 'react';
import { useParams } from 'react-router-dom';
import './SearchPage.css'
import {Link} from 'react-router-dom'
import { Basic_Url } from '../../Components/BasicUrl';


function SearchProduct({name, description, img, category, id}) {
  const {language} = useParams()
  
  return (
    
    <>
        <div className="row"> 
            <div className="col-lg-3 categories__item">
                <img src={Basic_Url + img} alt="logo" />
            </div>
            <div className="col-lg-7 categories__item">
                <h4>{name}</h4>
                <p>{description}...</p>
                <p>Телефон: +(998 97)  485 33 32</p>
            </div>
            <div className="col-lg-2 col-sm-12 categories__item">
                 <button className='btn btn-primary'><Link to={'/'+language+'/categories/'+category+'/products/'+id}>Подробнее</Link></button>
            </div>
        </div>

    </>
  );
}

export default SearchProduct;

import React from 'react';
import './SearchPage.css'
import {Link, useParams} from 'react-router-dom'
import { Basic_Url } from '../../Components/BasicUrl';



function SearchCategories({id, description, name, img}) {

  const {language} = useParams()

  return (
    <>
            <div className="catalog__item col-lg-4 col-md-6 ">
                <div className="item__photo">
                    <img src={Basic_Url + img} alt="photo"/>
                </div>
                <h3><Link to={"/" + (language ? language  : 'ru') + "/categories/"+id}>{name}</Link></h3>
                <p>{description}</p>
            </div>

    </>
  );
}
  

export default SearchCategories;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { articleContent, articleHeader, readMore} from '../TextsLanguages';
import './article.css'

function Article() {

  const {language='ru'} = useParams()

  /* Texts Languages */
  const readMoreText = readMore.filter(item => Object.keys(item)==language)
  const articleHeaderText = articleHeader.filter(item => Object.keys(item)==language)
  const articleContentText = articleContent.filter(item => Object.keys(item)==language)
  /* /Texts Languages */


  return (
    <>
        <article className="article__content-container">
        <div className="article__content">
            <h3>{Object.values(articleHeaderText[0]).join()}</h3>
            <p>{Object.values(articleContentText[0]).join()}</p>
            <button className="btn btn-outline-info" type="button"><Link  className='nav-link' to={"/"+(language ? language : 'ru') + "/about"}>{Object.values(readMoreText[0]).join()}</Link></button>
        </div>
    </article>
    </>
  );
}

export default Article;

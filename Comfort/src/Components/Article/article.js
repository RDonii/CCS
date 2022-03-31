import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './article.css'

function Article() {

  const {language} = useParams()

  return (
    <>
        <article className="article__content-container">
        <div className="article__content">
            <h3>Оптимальное соотноошение цены и качества</h3>
            <p>За годы работы компания «Сomfort Cooling Service» приобрела репутацию в Узбекистане. Основатель компании Давлетов
                Азамат Аминович открыл свой бизнес в 2014 году, вложив в него огромный опыт работы в строительной отрасли. Сегодня
                «Сomfort Cooling Service» является одним из ведущих поставщиков высококачественных материалов и оборудования, а 
                также предлагает полный спектр услуг по самым конкурентоспособным ценам.
            </p>
            <button className="btn btn-outline-info" type="button"><Link  className='nav-link' to={"/"+(language ? language : 'ru') + "/about"}>Подробнее</Link></button>
        </div>
    </article>
    </>
  );
}

export default Article;

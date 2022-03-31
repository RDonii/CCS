import React from 'react';
import './connect.css'
import { sendtelegram } from './Telegrambot';

function Connect() {
  return (
    <>
    <section className="connect__content-container" id="connect">
        <h2>Cвязаться с нами</h2>
        <div className="row form__container">
            <div className="col-lg-8 col-md-12 form__text-content">
                <h1>СТРОЙТЕ  ВМЕСТЕ С КОМПАНИЙ 
                    "CCS COMFORT COOLING 
                    SERVICE" </h1>
                <p>Comfort <span>Cooling</span> <span>Service</span></p>
            </div>
            <div className="col-lg-4 col-md-12 form__content">
                <h4>Оставить заявку</h4>
                <form action='' onSubmit={sendtelegram}> 
                    <fieldset className="mb-4">
                        <legend >Имя</legend>
                        <input id='name' type="text" className="form-control"/>
                    </fieldset> 
                    <fieldset className="mb-4">
                        <legend>Телефон номер</legend>
                        <input id='phone' type="number" className="form-control"/>
                    </fieldset>
                    <fieldset className="mb-4">
                        <legend>Сообщение</legend>
                        <textarea  className="form-control" id="message" rows="5"></textarea>
                    </fieldset>
                    <button id='connect__button' type="submit" className="mt-3 form-control btn btn-outline-primary">Отправить</button>
                </form>
            </div>
        </div>
    </section>
    </>
  );
}

export default Connect;

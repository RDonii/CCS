import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connectHeader } from '../TextsLanguages';
import './connect.css'
import {toast } from 'react-toastify';
// import { sendtelegram } from './Telegrambot';

function Connect() {

    const {language='ru'} = useParams()

    const connectHeaderText = connectHeader.filter(item => Object.keys(item)==language)
  
    const [nameBot, setName] = useState('')
    const [phoneBot, setPhone] = useState('')
    const [textBot, setText] = useState('')

    function getName(e){
        let data = e.target.value
        setName(data)
      }

      function getPhone(e){
        let data = e.target.value
        setPhone(data)
      }

      function getText(e){
        let data = e.target.value
        setText(data)
      }

    function formBot(e){
        e.preventDefault()
        let name = nameBot
        let phone = phoneBot
        let message = textBot

        let my_text = `Result is: %0A - Ism: ${name} %0A- Telefon: ${phone} %0A - Matn: ${message}`

        let token = '5219968887:AAH-F720dZq2CcoqeJRe_HH_lUQHgDzGoLc'
        let chat_id = -1001651144516
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`


        let api = new XMLHttpRequest()
        api.open('GET', url, true)
        api.send()
        toast.success((language=='ru' ? 'Заявка отправлена!' : language=='uz' ? "Ariza jo'natildi!" : 'Message sent'))
    }




  return (
    <>{console.log(nameBot)}
    <section className="connect__content-container" id="connect">
        <h2>{(language=='ru' ? 'Cвязаться с нами' : language=='uz' ? "biz bilan bog'lanish" : 'contact us')}</h2>
        <div className="row form__container">
            <div className="col-lg-8 col-md-12 form__text-content">
                <h1>{Object.values(connectHeaderText[0]).join()}</h1>
                <p>Comfort <span>Cooling</span> <span>Service</span></p>
            </div>
            <div className="col-lg-4 col-md-12 form__content">
                <h4>{(language=='ru' ? 'Оставить заявку' : language=='uz' ? "Ariza yuborish" : 'Contact us')}</h4>
                <form id='form' onSubmit={formBot}> 
                    <fieldset className="mb-4">
                        <legend >{(language=='ru' ? 'Имя' : language=='uz' ? "Ism" : 'Name')}</legend>
                        <input onChange={(e)=>getName(e)} id='name' type="text" className="form-control"/>
                    </fieldset> 
                    <fieldset className="mb-4">
                        <legend>{(language=='ru' ? 'Телефон номер' : language=='uz' ? "Telefon raqam" : 'Phone number')}</legend>
                        <input onChange={(e)=>getPhone(e)} id='phone' type="number" className="form-control"/>
                    </fieldset>
                    <fieldset className="mb-4">
                        <legend>{(language=='ru' ? 'Сообщение' : language=='uz' ? "Xabar" : 'Message')}</legend>
                        <textarea  onChange={(e)=>getText(e)} className="form-control" id="message" rows="5"></textarea>
                    </fieldset>
                    <button id='connect__button' type="submit" className="mt-3 form-control btn btn-outline-primary">{(language=='ru' ? 'Отправить' : language=='uz' ? "Jo'natish" : 'Send')}</button>
                </form>
            </div>
        </div>
    </section>
    </>
  );
}

export default Connect;

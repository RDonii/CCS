import React from 'react';
import './location.css'
import Iframe from 'react-iframe'

function Location() {
  return (
    <>
    <section id="location">
        <h2>местоположение</h2>
        <div className="location__map">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.5242712703325!2d69.28712408126763!3d41.29745708955172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef532ccafffff%3A0x1abd60f8722b159a!2sTransatlantic!5e0!3m2!1sru!2s!4v1646660206304!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </Iframe>
        </div>  
    </section>
    </>
  );
}

export default Location;

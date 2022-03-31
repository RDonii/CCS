import React from 'react';
import './mainComp.css'
import img1 from './Main/image1.png'
import img2 from './Main/image2.png'
import img3 from './Main/image3.png'
import img4 from './Main/image4.png'
import img5 from './Main/image5.png'
import img6 from './Main/image6.png'
import Carousel from 'react-bootstrap/Carousel'



function MainComp() {
  return (
    <>
       <main> 
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>СТРОЙТЕ  ВМЕСТЕ С КОМПАНИЕЙ {'<<'}CCS COMFORT COOLING SERVICE {'>>'} </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>ИССЛЕДОВАНИЯ И РАЗРАБОТКИ</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>лучшее обслуживание каждому клиенту </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>РЕЗЕРВНЫЕ ПОЖАРНЫЕ НАСОСНЫЕ АГРЕГАТЫ </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img5}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Паровой котел: применение, варианты устройств и их конструкция</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img6}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>чиллер которая охлаждает воду или незамерзающую жидкость</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  
    </main>
    </>
  );
}

export default MainComp;

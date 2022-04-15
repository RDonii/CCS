import React from 'react';
import './mainComp.css'
import img1 from './Main/image1.png'
import img2 from './Main/image2.png'
import img3 from './Main/image3.png'
import img4 from './Main/image4.png'
import img5 from './Main/image5.png'
import img6 from './Main/image6.png'
import Carousel from 'react-bootstrap/Carousel'
import { useParams } from 'react-router-dom';
import { mainFifthItem, mainFirstItem, mainFourthItem, mainSecondItem, mainSixthItem, mainThirdItem } from '../TextsLanguages';



function MainComp() {

  const {language='ru'} = useParams()

  /* Texts Languages */
  const mainFirstItemText = mainFirstItem.filter(item => Object.keys(item)==language)
  const mainSecondItemText = mainSecondItem.filter(item => Object.keys(item)==language)
  const mainThirdItemText = mainThirdItem.filter(item => Object.keys(item)==language)
  const mainFourthItemText = mainFourthItem.filter(item => Object.keys(item)==language)
  const mainFifthItemText = mainFifthItem.filter(item => Object.keys(item)==language)
  const mainSixthItemText = mainSixthItem.filter(item => Object.keys(item)==language)
  /* /Texts Languages */
 


  return (
    <>
       <main> 
        <Carousel>
          <Carousel.Item >
            <div className="image__box"></div>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{Object.values(mainFirstItemText[0]).join()}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="image__box"></div>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{Object.values(mainSecondItemText[0]).join()}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="image__box"></div>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{Object.values(mainThirdItemText[0]).join()}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="image__box"></div>
            <img
              className="d-block w-100"
              src={img4}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{Object.values(mainFourthItemText[0]).join()}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="image__box"></div>
            <img
              className="d-block w-100"
              src={img5}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{Object.values(mainFifthItemText[0]).join()}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="image__box"></div>
            <img
              className="d-block w-100"
              src={img6}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{Object.values(mainSixthItemText[0]).join()}</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  
    </main>
    </>
  );
}

export default MainComp;

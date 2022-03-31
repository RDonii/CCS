import React from 'react';
import './footer.css'
import logo from './Footer photos/CCS 6.png'


function Footer() {
  return (
    <>
      <footer>
    <div id="navbar_footer">
        
        <nav className="navbar navbar-expand-lg navbar-light ">
           
            <div className="container-fluid">
            <div className="logo">
                    <a href="#"><img src={logo} alt="logo"/></a>
            </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Главная</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">О нас</a>
                  </li>
                  <li id="dropdown" className="nav-item">
                    <div className="dropdown">
                        <a className="dropdown" data-toggle="dropdown" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Каталог
                        </a>

                        <div className="dropdown-menu">
                            <div data-toggle="collapse" data-target="#cardOne">
                                <a href="#">Все категории</a>
                                <a href="#">Шумоглошители</a>
                                <a href="#">Канальное оборудование</a>
                                <a href="#">Системы чиллер-фанкойл для охлаждения</a>
                                <a href="#">Теплообменники</a>
                                <a href="#">Пожарной сигнализация</a>
                                <a href="#">Система обогрева</a>
                                <a href="#">Медицинское оборудование </a>
                                <a href="#">Центральный кондиционер Korf UTR</a>
                                <a href="#">Система вентиляции</a>
                                <a href="#">Насосные станции</a>
                                <a href="#">Фильтры</a>
                                <a href="#">Комплектующие </a>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Проекты</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Контакты</a>
                  </li>
                </ul>
              </div>
              <div className="footer__logos">
                <a href="#"><i className="fa-brands fa-telegram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
        </nav>
        <div className="footer__info">
            <div className="row">
                <div className="footer__info-item col-lg-4">
                    <h2>Подробнее об услугах</h2>
                    <h2 className="mt-4">Другие проекты</h2>
                    <h2 className="mt-4">Наша команда</h2>
                </div>
                <div className="footer__info-item col-lg-4 col-md-6  col-sm-5">
                    <div className="text-content">
                        <div className="row first_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-solid fa-phone"></i>
                                    <div className="item__texts">
                                        <p>+998 71 233 80 10</p>
                                        <p>+998 97 485 33 32</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row second_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-brands fa-react"></i>
                                    <div className="item__texts">
                                        <p>ПН - Пт 9:00 - 18:00</p>
                                        <p>Сб: 09:00 – 15:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__info-item col-lg-4  col-md-6 col-sm-7">
                    <div className="text-content_2">
                        <div className="row first_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-regular fa-envelope"></i>
                                    <div className="item__texts">
                                        <p>info@ccslife.uz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row second_item">
                            <div className="col-md-12">
                                <div className="items d-flex">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="item__texts">
                                        <p>Uzbekistan, Tashkent city,</p>
                                        <p>Mirabad dist., Nukus str., 19/2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <p>© Copyright 2022 D.Q.T. Все права защищены!</p>
        </div>
    </div>
</footer>
    </>
  );
}

export default Footer;

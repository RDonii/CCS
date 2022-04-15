import React from 'react';
import './Developers.css'
import imgDev from './imgdev.jpeg'


function Developers() {


  return (
    <>
        <div id="developers">
            <img src={imgDev} alt="logo" />
            <h1>Inspired design</h1>
            <h1>Unparalleled experience</h1>
            <h2>examplary service</h2>
            <br/>
            <br/>
            <p><a href='http://rdevs.uz/ccslife' target='_blank'>Click to find us</a></p>
        </div>
    </>
  );
}

export default Developers;

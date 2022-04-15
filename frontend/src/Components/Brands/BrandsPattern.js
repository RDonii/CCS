import React from 'react';
import './brands.css'

function BrandsPattern({name, img}) {
  return (
    <>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <img src={img} alt={name}/>
            </div>
    </>
  );
}
  

export default BrandsPattern;

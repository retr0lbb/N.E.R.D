import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import imgd from './assets/images/default.jpg';
import { dataDigitalBestSeller } from './data';
import './teste.css';



export default function Teste(){
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots: true,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: false,
      spees: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: imgd,
      }));
    };
  
    return (
      <div className="App">
        <Slider {...settings}>
         {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">            
              <img 
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                  <div className='card-tittle'>
                    <h1>{item.title}</h1>
                  </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
}
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import getAllGameImagesAndData from './axiosFetch.js';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import imgd from './assets/images/default.jpg';
import { dataDigitalBestSeller } from './data';
import './teste.css';



export default function Teste({category}){
  var gameData;
  useEffect(()=>{
    const fetchData = async () =>{
      gameData = await getAllGameImagesAndData();
      console.log(gameData)
    }
    fetchData();
  }, [])


    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
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
        <h2>{category}</h2>
        <Slider {...settings}>
         {/*gameData.map((game, index) => (
            <div key={index} className="card">
              <div className="card-top">            
              <img 
                  src={
                    defaultImage[game.name] === game.name
                      ? defaultImage.linkDefault
                      : game.GameImage.BannerImage
                  }
                  alt={game.name}
                  onError={handleErrorImage}
                />
                  <div className='card-tittle'>
                    <h1>{game.name}</h1>
                  </div>
              </div>
            </div>
          ))*/}
        </Slider>
      </div>
    );
}
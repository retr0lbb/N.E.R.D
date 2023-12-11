import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate  } from 'react-router-dom';
import getAllGameImagesAndData from './axiosFetch.js';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import imgd from './assets/images/default.jpg';
import './teste.css';



export default function Teste({category}){
  const navigate = useNavigate()
  const [gameData, setGameData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllGameImagesAndData();
        setGameData(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  function BreakeALeg(dataArray) {
    return dataArray.map((game, index) => {
      const id = game._id;
      console.log(id)
      const gamePlainURL = game.GameImage.BannerImage.src;
      const stringSemPrefixo = gamePlainURL.replace(/^(\.\.\/)+/, '');
      const totalPathForImage = `https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us106.gitpod.io/${stringSemPrefixo}`;

      const handleClick =() =>{
        navigate(`/gamedetail/${id}`)
      }
  
      return (
        <div key={index} onClick={handleClick} className="card">
          <div className="card-top">
            <img
              src={totalPathForImage}
              alt={game.name}
              onError={handleErrorImage}
              loading="lazy"
            />
            <div className='card-tittle'>
              <h1>{game.name}</h1>
            </div>
          </div>
        </div>
      );
    });
  }


    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
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
         {
          BreakeALeg(gameData)
          }
        </Slider>
      </div>
    );
}
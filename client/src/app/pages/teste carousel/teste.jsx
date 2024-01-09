import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import {localUrl} from "../../../../nerdConfig.json"
import SkeletonBones from '../../shared/components/SkeletonBones/skeleton.jsx';
import { useNavigate  } from 'react-router-dom';
import gameDataH from "../../../dataHandler/data.js"
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import imgd from './assets/images/default.jpg';
import './teste.css';



export default function Teste({category}){
  const navigate = useNavigate()
  const [gameData, setGameData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    try {
      const getData = async() =>{
        const transData = await gameDataH
        setGameData(transData)
      }
      getData()
    } catch (error) {
      alert("an error has occorred")
    }finally{
      setLoading(false)
    }
    
  }, [gameData]);
  console.log(gameData)
  function generateBones(numberOf) {
    let bones = [];
    for (let i = 0; i < numberOf; i++) {
      bones.push(<SkeletonBones key={i} />);
    }
    return bones;
  }

  function BreakeALeg(dataArray) {
    return dataArray.map((game, index) => {
      const id = game._id;
      const gamePlainURL = game.GameImage.BannerImage.src;
      const stringSemPrefixo = gamePlainURL.replace(/^(\.\.\\)+/, '');
      const totalPathForImage = `${localUrl}/${stringSemPrefixo}`;

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
          loading? generateBones(10) :  BreakeALeg(gameData)
        }
        </Slider>
      </div>
    );
}
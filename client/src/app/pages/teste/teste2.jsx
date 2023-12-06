import React, { Component } from "react";
import Slider from "react-slick";
import Layout from "../../shared/components/Layout";
import { dataDigitalBestSeller } from '../teste carousel/data';


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  

  render() {
    return (
      <div className="App">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
          autoplay={true}
          infinite={true}
          initialSlide={4}
        >
            {dataDigitalBestSeller.map((capa) => (
            <div className="card">
              <div className="cardimagem">
                <img
                  src={capa.linkImg}
                  alt={capa.title}
      
                />
                <div className="card-tittle">
                <h1>{capa.title}</h1>
                </div>
              </div>

            </div>
          ))}
          
          
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={false}
          initialSlide={4}
          
        >
                  {dataDigitalBestSeller.map((capa) => (
            <div className="card">
              <div className="card-top">
                <img
                  src={capa.linkImg}
                  alt={capa.title}
      
                />
              </div>
            </div>
          ))}
         

        </Slider>
      </div>
    );
  }
}
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
    <Layout>
      <div className="App">
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            {dataDigitalBestSeller.map((capa) => (
            <div className="card">
              <div className="cardimagem">
                <img
                  src={capa.linkImg}
                  alt={capa.title}
      
                />
                <h1>{capa.title}</h1>
              </div>

            </div>
          ))}
          
          
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
                  {dataDigitalBestSeller.map((capa) => (
            <div className="card">
              <div className="card-top">
                <img
                  src={capa.linkImg}
                  alt={capa.title}
      
                />
                <h1>{capa.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{capa.price}</h3>
                <span className="category">{capa.category}</span>
              </div>
            </div>
          ))}
         

        </Slider>
      </div>
    </Layout>
    );
  }
}
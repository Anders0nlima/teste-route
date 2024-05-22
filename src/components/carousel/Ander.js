import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Ander() {
  const settings = {
    dots: true,
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
     
         <div className="card">
         <div className="card-top">
          <img src="rotas/rotas/src/components/carousel/brasil.jpg"/>
          <h1>Filme</h1>
         </div>
         <div className="card-bottom">
          <h3>best seller</h3>
          <p>assita hoje</p>
         </div>
       </div>

       <div className="card">
         <div className="card-top">
          <h1>Entrevista</h1>
         </div>
         <div className="card-bottom">
          <h3>best seller</h3>
          <p>assita hoje</p>
         </div>
       </div>

       <div className="card">
         <div className="card-top">
          <h1>Series</h1>
         </div>
         <div className="card-bottom">
          <h3>best seller</h3>
          <p>assita hoje</p>
         </div>
       </div>
      </Slider>
       
     </div>
  );
}

export default Ander;

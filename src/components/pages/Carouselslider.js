import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carouselslider.css";
import image1 from "../../images/1a.jpg";
import image2 from "../../images/1b.jpg";
import image3 from "../../images/1c.jpg";
import image4 from "../../images/1d.jpg";
import image5 from "./images/5.jpg";

const Carouselslider = () => {
  return (
    <div className="carousel__loop">
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        <div className="image">
          <img src={image1} alt="mobile" />
        </div>
        <div className="image">
          <img src={image2} alt="mobile" />
        </div>
        <div className="image">
          <img src={image3} alt="mobile" />
        </div>
        <div className="image">
          <img src={image4} alt="mobile" />
        </div>
        <div className="image">
          <img src={image5} alt="mobile" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselslider;

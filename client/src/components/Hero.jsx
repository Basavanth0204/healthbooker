import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        Welcome to Health Booker, your one-stop solution for all your healthcare appointment booking needs! Our mission is to make the process of finding and booking medical appointments convenient, efficient, and hassle-free. Whether you're looking for a routine check-up, specialist consultation, or any other healthcare service, Health Booker is here to simplify your journey towards better health.


        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;

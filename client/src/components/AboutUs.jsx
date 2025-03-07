import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Welcome to Health Booker, your one-stop solution for all your healthcare appointment booking needs! Our mission is to make the process of finding and booking medical appointments convenient, efficient, and hassle-free. Whether you're looking for a routine check-up, specialist consultation, or any other healthcare service, Health Booker is here to simplify your journey towards better health. At Health Booker, we understand the challengesindividuals face when trying to schedule medical appointments. Long waiting times, busy phone lines, and confusing scheduling systems can be frustrating. That's why we've developed a user-friendly web application that connects patients with healthcare providers seamlessly. Our platform empowers you to take control of your health by providing you with easy access to a wide range of medical professionals and services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

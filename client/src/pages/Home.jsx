import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import "../styles/home.css";

const services = [
  {
    title: "Physio Therapy at Home",
    description:
      "Under this service, we are promised to maintain, restore, and promote not only physical function but also health and fitness. As per expert therapist suggestion, our therapist works almost 24/7 and prevents symptoms, develops disorders and functional limitations and disabilities that may be caused by disease, disorder. You needed physio therapist Contact us.",
    image: "https://www.nursinghomecarebd.com/wp-content/uploads/phiyo-therapy-support-at-home.jpg"
  },
  {
    title: "One Call Service",
    description:
      "We provide medical equipment’s and oxygen cylinder rent sell also refill for all client needs. The equipment’s offered by us are very reliable and best price in Bangladesh and well researched. We always carry out a background check on every piece of equipment before use. Furthermore, equipment rental rates can be negotiated based on client budget constraints. We provide more experienced staff members based on the equipment home delivery in Dhaka.",
    image: "https://www.nursinghomecarebd.com/wp-content/uploads/One-Call-Service-in-Dhaka-BD.jpg"
  },
  {
    title: "Nurse Service at Home",
    description:
      "Nurse Service at Home - Our home service is ideal for patients who need long-term health care for complex medical problems and daily needs. This program aims to help elderly home patients regain their independence through a systematic and loving care plan specifically designed for each senior care.",
    image: "https://www.nursinghomecarebd.com/wp-content/uploads/Nurse-Service-at-Home-Care.jpg"
  },
  {
    title: "Baby Care at Home",
    description:
      "A new baby is undoubtedly a very pleasant time for everyone at home. But it's also true that a new mother experiences many physiological & emotional changes, after the birth of a child. It is the time when a mother recovers from the birth of a child and requires expert attention and care for the baby and mother.",
    image: "https://www.nursinghomecarebd.com/wp-content/uploads/Baby-Care-at-Home.jpg"
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      
      <Hero />
      <center>
        <img
          src="https://i.ibb.co/PFqrVX4/doctor-writing-on-clipboard-scene-stock-animation-97071-854x480.gif"
          height={500}
          width={1500}
        />
      </center>
      <AboutUs />
      <section className="services-section">
        <center><h2>Our Services</h2></center>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
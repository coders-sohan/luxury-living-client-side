import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../../components/Service/Service";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://luxury-living-server-side.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 3)));
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <p>Services</p>
          <h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2 mb-6 md:mb-8 lg:mb-16">
            We're an agency tailored to all <br /> clients' needs that always
            delivers
          </h1>
        </div>
        <div className="flex flex-wrap">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <div className="inline-block">
            <Link
              className="h-10 bg-gray-900 text-white hover:bg-gray-700 transition ease-linear duration-200 px-5 py-2 rounded-md flex justify-center items-center"
              to="/services"
            >
              <span>Explore more</span>
              <span className="mt-1 ml-2">
                <i className="fas fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;

import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import serviceData from "../data/serviceData";

import {
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="py-16" id="service">
      <Container>

        <Heading
          className="mb-10 text-center"
          text="Services"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 group-hover:bg-black">
                  <Icon className="text-2xl text-gray-800 transition-all duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-grow text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                {/* Learn More */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex w-fit items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
                >
                  Learn More

                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Icon */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <FaTimes />
              </button>

              {/* Service Icon */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-black text-white">
                {React.createElement(selectedService.icon, {
                  className: "text-2xl",
                })}
              </div>

              {/* Title */}
              <h2 className="mb-4 pr-10 text-2xl font-bold text-gray-900 sm:text-3xl">
                {selectedService.title}
              </h2>

              {/* Details */}
              <p className="mb-6 text-sm leading-7 text-gray-600 sm:text-base">
                {selectedService.details}
              </p>

              {/* Features */}
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                What I Can Help With
              </h3>

              <div className="space-y-3">
                {selectedService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
                  >
                    <FaCheckCircle className="shrink-0 text-gray-800" />

                    <span className="text-sm text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedService(null)}
                className="mt-7 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </Container>
    </section>
  );
};

export default Service;
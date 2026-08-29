import React from "react";
import Container from "./Container";
import Image from "./Image";
import bannerData from "../data/bannerData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="py-5">
      <Container>
        <div className="mx-auto w-[75%] overflow-hidden rounded-2xl">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            {bannerData.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.banner}
                  className="w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
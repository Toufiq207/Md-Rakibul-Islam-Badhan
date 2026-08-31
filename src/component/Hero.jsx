
import React from "react";
import Container from "./Container";
import Image from "./Image";
import bannerData from "../data/bannerData";

import Facebook from "../assets/icon/facebook.png";
import Linkdin from "../assets/icon/linkedin.jpg";
import Instagram from "../assets/icon/instagram.png";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden py-5 sm:py-7 lg:py-10">
      <Container>

        
  
{/* ================= Hero Intro ================= */}
<div className="mb-6 text-center font-pop sm:mb-8 lg:mb-10">

  {/* Name - Letter Animation */}
  <motion.h1
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.08,
        },
      },
    }}
    className="
      text-2xl
      font-bold
      text-gray-900
      sm:text-3xl
      md:text-4xl
      lg:text-5xl
    "
  >
    {"MD RAKIBUL ISLAM BADHAN".split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          },
        }}
        className="inline-block"
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>


  {/* Professional Title - Letter Animation */}
  <motion.p
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          delayChildren: 1.8,
          staggerChildren: 0.04,
        },
      },
    }}
    className="
      mt-2
      text-sm
      font-medium
      text-gray-600
      sm:text-base
      md:text-lg
    "
  >
    {"Digital Marketing Specialist | Trainer | ICT Professional"
      .split("")
      .map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 15,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
  </motion.p>

</div>


        {/* ================= Banner Area ================= */}
        <div className="relative mx-auto w-full px-2 sm:w-[92%] sm:px-0 md:w-[88%] lg:w-[78%]">

          {/* Previous Arrow */}
          <button
            className="
              custom-prev
              absolute
              left-4
              top-1/2
              z-20
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/50
              text-white
              shadow-lg
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70

              sm:-left-5
              sm:h-9
              sm:w-9
              sm:bg-gray-800/90

              md:-left-8
              md:h-10
              md:w-10

              lg:-left-12
              lg:h-11
              lg:w-11
            "
          >
            <RiArrowLeftSLine
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl
              "
            />
          </button>

          {/* Swiper */}
          <div
            className="
              overflow-hidden
              rounded-xl
              shadow-lg
              sm:rounded-2xl
              lg:rounded-3xl
            "
          >
            <Swiper
              modules={[
                Autoplay,
                Pagination,
                Navigation,
              ]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            >
              {bannerData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item.banner}
                    className="
                      block
                      h-auto
                      w-full
                      object-cover
                    "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Arrow */}
          <button
            className="
              custom-next
              absolute
              right-4
              top-1/2
              z-20
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/50
              text-white
              shadow-lg
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70

              sm:-right-5
              sm:h-9
              sm:w-9
              sm:bg-gray-800/90

              md:-right-8
              md:h-10
              md:w-10

              lg:-right-12
              lg:h-11
              lg:w-11
            "
          >
            <RiArrowRightSLine
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl
              "
            />
          </button>

        </div>

        {/* ================= Social Icons ================= */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-4
            sm:mt-8
            sm:gap-6
            md:gap-7
            lg:mt-10
            lg:gap-8
          "
        >

          {/* Facebook */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-110
            "
          >
            <Image
              className="
                w-[42px]
                sm:w-[52px]
                md:w-[60px]
                lg:w-[70px]
              "
              src={Facebook}
            />
          </a>

          {/* LinkedIn */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-110
            "
          >
            <Image
              className="
                w-[42px]
                rounded-lg
                sm:w-[52px]
                md:w-[60px]
                lg:w-[70px]
              "
              src={Linkdin}
            />
          </a>

          {/* Instagram */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-110
            "
          >
            <Image
              className="
                w-[42px]
                sm:w-[52px]
                md:w-[60px]
                lg:w-[70px]
              "
              src={Instagram}
            />
          </a>

        </div>

      </Container>
    </div>
  );
};

export default Hero;




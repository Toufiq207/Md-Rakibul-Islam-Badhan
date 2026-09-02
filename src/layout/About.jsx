import React from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import Image from "../component/Image";
import Badhon from "../assets/logo/rakibilislam badhon.webp";
import { motion } from "framer-motion";
const About = () => {
  return (
  <section className="py-10" id="about">
<Container>

    {/* Heading */}
  
      <Heading
        className="mb-8 text-center md:mb-10"
        text="About"
      />
    

    <div className="flex flex-col gap-8 md:flex-row md:gap-0">

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex w-full justify-center md:w-1/2"
      >
        <div className="aspect-square w-[70%] overflow-hidden rounded-full sm:w-[60%] md:w-[75%]">
          <Image
            src={Badhon}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex w-full items-center justify-center md:w-1/2 md:justify-start"
      >
        <p className="w-[90%] text-center text-base font-normal font-pop leading-relaxed text-gray-500 sm:text-lg md:w-[75%] md:text-left md:text-xl">
          Welcome! I’m Md Rakibul Islam Badhan. I help businesses transform
          their digital presence into revenue-generating engines through
          targeted digital marketing, strategic SEO, and high-converting ad
          campaigns.

          <br />
          <br />

          Holding NSDA Level-3, Level-4, and Level-6 certifications in
          Digital Marketing, I combine analytical thinking with creative
          design to solve real marketing challenges. Over the years, I have
          mentored hundreds of aspiring marketers while managing performance
          marketing, search rankings, and web analytics for various clients.
          My goal is simple: to help your brand grow smartly, efficiently,
          and visibly in the digital marketplace.
        </p>
      </motion.div>

    </div>
  </Container>
</section>
  );
};

export default About;
import React from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import Image from "../component/Image";
import Badhon from "../assets/logo/rakibilislam badhon.png";

const About = () => {
  return (
    <div className="py-10">
      <Container>
        <Heading
          className="mb-8 md:mb-10 text-center"
          text="About"
        />

        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[70%] sm:w-[60%] md:w-[75%] aspect-square rounded-full overflow-hidden">
              <Image
                src={Badhon}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
            <p className="w-[90%] md:w-[75%] text-base sm:text-lg md:text-xl text-gray-500 font-normal font-pop text-center md:text-left leading-relaxed">
             Welcome! I’m Md Rakibul Islam Badhan. I help businesses transform their digital presence into revenue-generating engines through targeted digital marketing, strategic SEO, and high-converting ad campaigns.

Holding NSDA Level-3, Level-4, and Level-6 certifications in Digital Marketing, I combine analytical thinking with creative design to solve real marketing challenges. Over the years, I have mentored hundreds of aspiring marketers while managing performance marketing, search rankings, and web analytics for various clients. My goal is simple: to help your brand grow smartly, efficiently, and visibly in the digital marketplace.
            </p>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default About;
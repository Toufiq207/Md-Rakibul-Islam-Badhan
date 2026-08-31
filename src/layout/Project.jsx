import React from "react";
import Container from "../component/Container";
import projectsData from "../data/projectsData";
import { motion } from "framer-motion";
import Heading from "../component/Heading";

const Project = () => {
  return (
    <section id="project" className="py-20 font-pop">
      <Container>

        {/* Section Heading */}
        <div
         
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[3px] text-blue-600">
            My Work
          </p>
        
          <Heading text='  Projects & Case Studies'/>

        
        

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Here are some of my selected projects, showing the problem,
            solution and approach behind each project.
          </p>
        </div>


        {/* Projects */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}

              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              className="
                group
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-7
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-xl
              "
            >

              {/* Project Number */}
              <div className="mb-6 flex items-center justify-between">

                <span className="text-sm font-semibold text-blue-600">
                  PROJECT {String(project.id).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600">
                  {project.service}
                </span>

              </div>


              {/* Title */}
              <h3 className="
                mb-6
                text-2xl
                font-bold
                text-gray-900
                transition-colors
                duration-300
                group-hover:text-blue-600
              ">
                {project.title}
              </h3>


              {/* Problem */}
              <div className="mb-5">

                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  Problem
                </h4>

                <p className="leading-7 text-gray-600">
                  {project.problem}
                </p>

              </div>


              {/* Solution */}
              <div className="mb-5">

                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  Solution
                </h4>

                <p className="leading-7 text-gray-600">
                  {project.solution}
                </p>

              </div>


              {/* Result */}
              <div className="rounded-xl bg-gray-50 p-5">

                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  Result
                </h4>

                <p className="leading-7 text-gray-600">
                  {project.result}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Project;
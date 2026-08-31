import React from "react";
import Container from "../component/Container";
import projectsData from "../data/projectsData";


const Project = () => {
  return (
    <section className="py-20 font-pop">
      <Container >

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-[3px] text-blue-600 mb-3">
            My Work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Projects & Case Studies
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-7">
            Here are some of my selected projects, showing the problem,
            solution and approach behind each project.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-blue-600">
                  PROJECT {String(project.id).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600">
                  {project.service}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Problem */}
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Problem
                </h4>

                <p className="text-gray-600 leading-7">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Solution
                </h4>

                <p className="text-gray-600 leading-7">
                  {project.solution}
                </p>
              </div>

              {/* Result */}
              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Result
                </h4>

                <p className="text-gray-600 leading-7">
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Project;
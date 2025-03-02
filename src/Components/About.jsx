import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold ">About Me</h1>
        <p className="text-lg mt-1 flex gap-3 justify-center">
          <i className="ri-flower-line text-indigo-600"></i>Transforming ideas into digital
          experiences<i className="ri-flower-line text-indigo-600"></i>
        </p>
      </div>
    </section>
  );
};

export default About;

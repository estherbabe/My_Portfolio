import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
       from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex
       flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline
           border-b-4 border-fuchsia-500"
          >
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa porro
          cupiditate obcaecati quaerat? Totam optio praesentium sit vero
          repudiandae fugiat, voluptates provident ab autem, itaque amet iure
          porro hic ad.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          nesciunt. Saepe non beatae asperiores, soluta perferendis deleniti
          mollitia repellendus? Nostrum magnam ad consequuntur ratione, culpa
          vel sed debitis excepturi pariatur.
        </p>
      </div>
    </div>
  );
};

export default About;

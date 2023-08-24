import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Project RISE<br/>
            <span className="text-indigo-700">{" "}<div className="word"></div>{" "}</span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
          Project RISE is a transformative initiative that aims to empower slum students through quality education and guidance. The project kicks off with an inspiring panel discussion featuring esteemed guests Girish Prabhune and Lila Poonawalla, both renowned for their invaluable contributions to society. With their guidance, this project will play a crucial role in transforming the lives of slum students.
          </p>
        </div>
      </div>
    </div>
  );
}

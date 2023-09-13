import React from 'react';

const Sponsors = () => {
  const sponsorImages = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
  ];

  return (
    <section className="sponsors mt-6 md:mt-14" id="sponsors">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 md:mb-8">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center items-center">
        {sponsorImages.map((image, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/4 px-4 py-2"
          >
            <img
              src={image}
              alt={`Sponsor ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;

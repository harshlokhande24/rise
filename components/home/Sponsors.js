import React from 'react';

const Sponsors = () => {
  const sponsorImages = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
  ];

  return (
    <section className="sponsors mt-10 md:mt-14" id="sponsors">
      <h2 className="text-center text-3xl font-semibold mb-8">Our Sponsors</h2>
      <div className="flex justify-center items-center">
        {sponsorImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sponsor ${index + 1}`}
            className="w-40 h-40 mx-4 object-contain" // Adjusted size to w-32 and h-32
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;

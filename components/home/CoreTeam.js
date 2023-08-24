import React from "react";

export default function CoreTeam() {
  const cc = [
    {
      avatar: "/team/sonali_patil.jpeg",
      name: "Dr. Sonali Patil",
      position: "Project Lead",
    },
    {
      avatar: "/team/ashwini_ladekar.jpeg",
      name: "Dr. Ashwini Ladekar",
      position: "Coordinator",
    },
    {
      avatar: "/team/anuja_jadhav.jpeg",
      name: "Dr. Anuja Jadhav",
      position: "Coordinator",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14 " id="team">
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Teamwork is the fuel that allows common people to attain uncommon
        results.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
  <div className="flex justify-center items-center h-full">
    <div className="flex flex-row flex-wrap justify-center">
      {/* Card */}
      {cc.map((cc, index) => (
        <div
          key={index}
          className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
        >
          <img
            src={cc.avatar}
            alt=""
            className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
          />
          <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
          <p className="text-zinc-500">{cc.position}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

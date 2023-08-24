import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert bg-zinc-100">
        <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            <img src="/logo1.png" alt="" className="w-32 h-32 mx-4 lg:h-14 sm:w-auto self-center object-contain" />
            <div className="my-6 text-base text-color f-f-l mx-4 opacity-60 text-center">
              <b>Address:</b> Pimpri Chinchwad College of Engineering<br/>
              Akurdi, Sector No. 26, 411044 <br/>
              <b>Email:</b> pccoeieee@gmail.com<br/>
            </div>
            <div className="text-sm text-color mb-10 f-f-l self-center">
              <span className="text-sm">
                <a
                  href="https://pccoeieee.org"
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" sm:text-center sm:text-base transition-all ease-in-out"
                >
                  {"</>"} with 💛 by Team Webmasters!{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

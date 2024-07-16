import React from "react";
import home5_1 from "../../../images/home5-1.png";
import home5_2 from "../../../images/home5-2.png";
import home5_3 from "../../../images/home5-3.png";

const Home5 = () => {
  return (
    <>
<section className="bg-softgray text-center  py-24 px-16">
      <p className="text-md font-Lato font-light  mb-2">OUR TEAM</p>
      <h2 className="text-5xl font-Cinzel font-bold text-brown mb-10">MEET OUR TEAM</h2>
      <div className="flex justify-around font-Lato">
        <div className="w-1/3 p-4">
          <img src={home5_1} alt="Team Member" className="w-full h-auto" />
          <p className="font-bold mt-4">Michael J. McKenna</p>
          <p className="text-brown italic">Pengacara</p>
        </div>
        <div className="w-1/3 p-4">
          <img src={home5_2} alt="Team Member" className="w-full h-auto" />
          <p className="font-bold mt-4">Michael J. McKenna</p>
          <p className="text-brown italic">Pengacara</p>
        </div>
        <div className="w-1/3 p-4">
          <img src={home5_3} alt="Team Member" className="w-full h-auto" />
          <p className="font-bold mt-4">Michael J. McKenna</p>
          <p className="text-brown italic">Pengacara</p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="border-solid border-2 border-brown text-brown bg-transparent hover:bg-brown hover:text-white text-sm font-semibold py-3 px-6">
        View All Team Members
        </button>
        </div>
    </section>
    </>
  );
};

export default Home5;
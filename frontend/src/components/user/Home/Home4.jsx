import React from "react";
import { Link } from "react-router-dom";

const Home4 = () => {
  return (
    <div className="bg-primarywhite px-16 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 font-Cinzel mr-72">
          Our Legal Work
        </h2>
        <h2 className="text-4xl text-brown font-bold mb-12 font-Cinzel ml-52">
          Ongoing & Past Cases
        </h2>
      </div>
      <div className="mt-16 space-y-8 font-Lato">
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-2xl font-semibold">
            Intellectual Property Infringement
          </h2>
          <p className="mt-2 text-gray-700">
            Membela hak kekayaan intelektual klien yang dituduh melakukan
            pelanggaran hak cipta oleh pesaing ...
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-400 italic">BY TIYA QUZZA</p>
            <a href="#" className="text-brown">
              READ MORE -&gt;
            </a>
          </div>
        </div>

        
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-2xl font-semibold">
            Intellectual Property Infringement
          </h2>
          <p className="mt-2 text-gray-700">
            Membela hak kekayaan intelektual klien yang dituduh melakukan
            pelanggaran hak cipta oleh pesaing ...
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-400 italic">BY TIYA QUZZA</p>
            <a href="#" className="text-brown">
              READ MORE -&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Link to="/cases" className="border-solid border-2 border-brown hover:border-brown hover:text-brown hover:bg-transparent bg-brown text-white text-sm font-semibold py-3 px-12">
          See All Cases
        </Link>
      </div>
    </div>
  );
};

export default Home4;

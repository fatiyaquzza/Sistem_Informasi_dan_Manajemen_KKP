import React from "react";
import Branches from "../../../images/Branches.png";
import Clients from "../../../images/Clients.png";
import Established from "../../../images/Established.png";
import Lawyers from "../../../images/Lawyers.png";
import SupportTeam from "../../../images/SupportTeam.png";

const Home2 = () => {
  return (
    <>
      <style>
        {`
          .group:hover img {
            filter: brightness(0) invert(1);
          }
        `}
      </style>
      <section className="bg-primarywhite px-8 xl:px-16 py-12 xl:py-24 text-center">
     
        <h2 className="text-3xl xl:text-4xl font-bold mb-4 xl:mb-0 font-Cinzel xl:mr-72">
          Gambaran Perusahaan
        </h2>
        <h2 className="text-3xl xl:text-4xl text-brown font-bold mb-8 xl:mb-12 font-Cinzel xl:ml-52">
          & Statistik Operasional
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Establish cards */}
    <div className="bg-white p-6 px-12 shadow-lg transition-colors duration-300 hover:bg-brown hover:text-white group">
      <img
        src={Established}
        alt="Established"
        className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
      />
      <h4 className="text-xl font-semibold mb-2 italic">2019</h4>
      <p className="opacity-70 mb-4">Didirikan Sejak</p>
    </div>

    {/* Lawyers card */}
    <div className="bg-white p-6 px-12 shadow-lg transition-colors duration-300 hover:bg-brown hover:text-white group">
      <img
        src={Lawyers}
        alt="Lawyers"
        className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
      />
      <h4 className="text-xl font-semibold mb-2 italic">Lebih Dari 100</h4>
      <p className="opacity-70 mb-4">Kasus</p>
    </div>

    {/* Branches card */}
    <div className="bg-white p-6 px-12 shadow-lg transition-colors duration-300 hover:bg-brown hover:text-white group">
      <img
        src={Branches}
        alt="Branches"
        className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
      />
      <h4 className="text-xl font-semibold mb-2 italic">2</h4>
      <p className="opacity-70 mb-4">Cabang</p>
    </div>

    {/* Clients card */}
    {/* <div className="bg-white p-6 px-12 shadow-lg transition-colors duration-300 hover:bg-brown hover:text-white group">
      <img
        src={Clients}
        alt="Clients"
        className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
      />
      <h4 className="text-xl font-semibold mb-2 italic">210603</h4>
      <p className="opacity-70 mb-4">Clients</p>
    </div> */}

    {/* Support Team card */}
    {/* <div className="bg-white p-6 px-12 shadow-lg transition-colors duration-300 hover:bg-brown hover:text-white group">
      <img
        src={SupportTeam}
        alt="Support Team"
        className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
      />
      <h4 className="text-xl font-semibold mb-2 italic">70</h4>
      <p className="opacity-70 mb-4">Support Team</p>
    </div> */}
  </div>

      </section>
    </>
  );
};

export default Home2;
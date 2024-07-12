import React from "react";
import Branches from "../../images/Branches.png";
import Clients from "../../images/Clients.png";
import Established from "../../images/Established.png";
import Lawyers from "../../images/Lawyers.png";
import SupportTeam from "../../images/SupportTeam.png";

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
      <section className="text-center py-24 bg-primarywhite">
        <h2 className="text-4xl font-bold mb-4 font-Cinzel mr-52">
          Gambaran Perusahaan
        </h2>
        <h2 className="text-4xl text-brown font-bold mb-12 font-Cinzel ml-52">
          & Statistik Operasional
        </h2>
        <div className="flex flex-col items-center space-y-8 px-12 pt-4">
          <div className="flex flex-wrap justify-center space-x-8 font-Lato">
            {/* Established */}
            <div className="bg-white p-6 px-12 shadow-lg w-[360px] transition-colors duration-300 hover:bg-brown hover:text-white group">
              <img
                src={Established}
                alt="Established"
                className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
              />
              <h4 className="text-xl font-semibold mb-2 italic">2020</h4>
              <p className="opacity-70 mb-4">Established</p>
            </div>

            {/* Lawyers */}
            <div className="bg-white p-6 px-12 shadow-lg w-[360px] transition-colors duration-300 hover:bg-brown hover:text-white group">
              <img
                src={Lawyers}
                alt="Lawyers"
                className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
              />
              <h4 className="text-xl font-semibold mb-2 italic">15</h4>
              <p className="opacity-70 mb-4">Lawyers</p>
            </div>

            {/* Branches */}
            <div className="bg-white p-6 px-12 shadow-lg w-[360px] transition-colors duration-300 hover:bg-brown hover:text-white group">
              <img
                src={Branches}
                alt="Branches"
                className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
              />
              <h4 className="text-xl font-semibold mb-2 italic">21</h4>
              <p className="opacity-70 mb-4">Branches</p>
            </div>
          </div>

          {/* Clients */}
          <div className="flex flex-wrap justify-center space-x-8">
            <div className="bg-white p-6 px-12 shadow-lg w-[360px] transition-colors duration-300 hover:bg-brown hover:text-white group">
              <img
                src={Clients}
                alt="Clients"
                className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
              />
              <h4 className="text-xl font-semibold mb-2 italic">210603</h4>
              <p className="opacity-70 mb-4">Clients</p>
            </div>

            {/* Support Team */}
            <div className="bg-white p-6 px-12 shadow-lg w-[360px] transition-colors duration-300 hover:bg-brown hover:text-white group">
              <img
                src={SupportTeam}
                alt="Support Team"
                className="mx-auto mb-4 w-16 h-16 mt-4 transition-transform duration-300"
              />
              <h4 className="text-xl font-semibold mb-2 italic">70</h4>
              <p className="opacity-70 mb-4">Support Team</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2;
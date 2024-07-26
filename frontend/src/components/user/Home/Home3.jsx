import React from "react";
import home3_1 from "../../../images/home3-1.png";
import home3_3 from "../../../images/civilRights.png";
import { Link } from "react-router-dom";

const Home3 = () => {
  return (
    <>
<section className="bg-softgray py-12 md:py-24 px-8 md:px-16">
  <div className="flex flex-col md:flex-row md:justify-between">
    {/* Section 1 */}
    <div className="w-full md:w-1/2 mb-10 ">
      <p className="text-sm md:text-md font-Lato font-light mb-2 md:text-start text-center">
      APA YANG KAMI KERJAKAN
      </p>
      <p className="text-3xl md:text-5xl font-Cinzel font-bold text-brown mb-6 md:mb-10 md:text-start text-center">
        Layanan Hukum Kami
      </p>

      <div className="bg-brown shadow-lg hover:shadow-sm hover:bg-opacity-90 w-full pb-8">
        <p className="font-Lato font-bold text-white text-md mb-2 px-8 pt-8 md:px-12">
          Civil Law
        </p>
        <p className="font-Lato px-8 md:px-12 text-white font-light text-md text-justify mb-8">
        Civil law governs disputes between individuals or organizations, focusing on resolving issues such as contracts, property, and family matters.
        </p>
        <div className="flex justify-center">
          <img src={home3_1} alt="Hukum Pidana" className="w-[300px] h-[260px] md:w-[400px] md:h-[300px]" />
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="w-full md:w-1/2 md:ml-10">
      <div className="bg-brown shadow-lg hover:shadow-sm hover:bg-opacity-90 w-full py-8 items-center mt-0 md:mt-2">
        <p className="font-Lato font-bold text-white text-md mb-2 pl-8 pt-0 md:pt-8 md:pl-12">
        Criminal Law
        </p>
        <p className="font-Lato pl-8 md:pl-12 pr-8 md:pr-12 text-white font-light text-md text-justify mb-8">
        Criminal law deals with offenses against the state, establishing legal penalties for actions that harm public safety and order.
        </p>
        <div className="flex justify-center px-8 md:px-12">
          <img src={home3_3} alt="Hukum Perdata" className="w-[300px] h-[260px] md:w-[400px] md:h-[300px]" />
        </div>
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <Link
      to="/expertise"
      className="border-solid border-2 border-brown text-brown bg-transparent hover:bg-brown hover:text-white text-sm font-semibold py-3 px-6"
    >
      See All Practice Area
    </Link>
  </div>
</section>

    </>
  );
};

export default Home3;

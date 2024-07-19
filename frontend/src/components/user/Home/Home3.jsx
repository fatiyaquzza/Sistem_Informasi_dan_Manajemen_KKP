import React from "react";
import home3_1 from "../../../images/home3-1.png";
import home3_2 from "../../../images/home3-2.png";
import home3_3 from "../../../images/home3-3.png";
import { Link } from "react-router-dom";

const Home3 = () => {
  return (
    <>
      <section className=" bg-softgray px-16 py-24">
        <div className="flex justify-between">
          <div className="w-1/2">
            <p className="font-Lato font-light text-md mb-2">
              WHAT WE DO
            </p>
            <p className="font-Cinzel text-brown font-bold text-5xl mb-8">
              OUR PRACTICE AREA
            </p>

            <div className="bg-brown shadow-lg hover:shadow-sm hover:bg-opacity-90 w-full pb-8">
              <p className="font-Lato font-bold text-white text-md mb-2 px-12 pt-8">
                Hukum Kontrak
              </p>
              <p className="font-lato w-full px-12 text-white font-light text-md text-justify mb-8">
                Membuat, meninjau, dan menegosiasikan perjanjian kontrak serta
                menyelesaikan perselisihan yang muncul dari kontrak.
              </p>
              <div className="flex justify-center">
                <img src={home3_1} alt="lawyer" className="w-[300px] h-[260px]" />
              </div>
            </div>
          </div>

          <div className="w-1/2 ml-10">
            
            <div className="bg-brown shadow-lg hover:shadow-sm hover:bg-opacity-90 w-full py-8  items-center mt-6">
              <div>
                <p className="font-Lato font-bold text-white text-md mb-2 pl-12 pt-8">
                  Hukum Properti
                </p>
                <p className="font-lato pl-12 pr-12 text-white font-light text-md text-justify mb-8 ">
                  Membantu klien dalam transaksi properti, sengketa properti,
                  sewa-menyewa, dan hak kepemilikan tanah.
                </p>
              </div>

              <div className="flex justify-center pr-12 pl-8">
                <img src={home3_3} alt="lawyer" className="w-[300px] h-[260px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
        <Link to="/expertise" className="border-solid border-2 border-brown text-brown bg-transparent hover:bg-brown hover:text-white text-sm font-semibold py-3 px-6">
        See All Practice Area
        </Link>
        </div>
      </section>
    </>
  );
};

export default Home3;

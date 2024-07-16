import React from "react";
import home1 from "../../../images/home1.png";
import home0 from "../../../images/home0.png";

const Home1 = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${home0})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold border-b py-10 border-white ">Welcome</h1>
          <p className="text-xl mt-5 font-light">
            for clients with a stake in federal legislation or regulatory
            guidance
          </p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <a href="#section2" className="p-2 text-white animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>

      <section
        id="section2"
        className="h-screen bg-softgray text-black flex justify-center px-16"
      >
        <div className="w-7/12 flex items-center">
          <div>
            <p className="font-Lato font-light text-md mb-2">SIAPAKAH KAMI</p>
            <p className="font-Cinzel text-brown font-bold text-5xl mb-10">
              LKBH SATA AL-FAQIH
            </p>
            <p className="font-Lato font-light text-xl w-full pr-10 text-justify">
              merupakan sebuah organisasi yang berkomitmen untuk membantu
              masyarakat dalam memperoleh hak-haknya secara layak. Sebagai
              payung hukum yang dapat diandalkan, LKBH Sata Al-Faqih memberikan
              bantuan hukum kepada pihak-pihak yang membutuhkan, menangani
              berbagai kasus dan permasalahan hukum mereka. Dengan tim yang
              profesional dan berdedikasi, LKBH Sata Al-Faqih berusaha
              memastikan keadilan dan perlindungan hukum bagi seluruh lapisan
              masyarakat
            </p>
          </div>
        </div>

        <div className="flex justify-end w-5/12 mt-16">
          <img src={home1} alt="lawyer" className="mb-16" />
        </div>
      </section>
    </>
  );
};

export default Home1;

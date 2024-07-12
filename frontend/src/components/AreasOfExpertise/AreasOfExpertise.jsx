import React from "react";
import contactus from "../../images/contactus.png";
import familyLaw from "../../images/familyLaw.png"; // Example images, replace with actual paths
import housingLaw from "../../images/housingLaw.png";
import civilRights from "../../images/civilRights.png";

const ContactUs = () => {
  const specializations = [
    { name: "Family Law", image: familyLaw },
    { name: "Housing Law", image: housingLaw },
    { name: "Civil Rights", image: civilRights },
    { name: "Family Law", image: familyLaw },
    { name: "Housing Law", image: housingLaw },
    { name: "Civil Rights", image: civilRights },
    { name: "Family Law", image: familyLaw },
    { name: "Housing Law", image: housingLaw },
    { name: "Civil Rights", image: civilRights },
  ];

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactus})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold">Areas of Expertise</h1>
          <hr className="w-[600px] mx-auto border-1 border-white my-10" />
          <p className="text-xl mt-4 font-light">
            Here to Assist. Ready to Listen. Committed to Your Cause.
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

      <section id="section2" className="bg-primarywhite text-black px-16 py-24">
        <p className="font-Cinzel font-light text-5xl text-center">
          Our Legal <span className="text-brown font-semibold">Specializations</span>
        </p>
        <hr className="w-[600px] mx-auto border-1 border-[#BCBCBC] my-10" />
        <p className="font-Lato font-light text-xl text-center mx-64">
          At LKBH Sata Al-Faqih, we offer a wide range of legal services to meet the diverse needs of our clients. Our team of skilled attorneys is committed to providing expert guidance and representation in various areas of law.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
          {specializations.map((specialization, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={specialization.image}
                alt={specialization.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center group-hover:opacity-80 transition-opacity duration-300">
                <p className="text-white text-2xl font-medium font-Lato">
                  {specialization.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactUs;

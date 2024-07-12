import React from "react";
import Case from "../../images/Case.png";
import familyLaw from "../../images/familyLaw.png";
const ContactUs = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Case})`, opacity: 0.2 }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold">Cases</h1>
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
          Recent and Ongoing{" "}
          <span className="text-brown font-semibold">Cases</span>
        </p>
        <hr className="w-[600px] mx-auto border-1 border-[#BCBCBC] my-10" />
        <p className="font-Lato font-light text-xl text-center mx-64">
          Below are examples of some of the notable cases we have handled,
          showcasing our dedication and expertise across various areas of law.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20 font-Lato">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-gray-100 px-2 py-6 shadow-md">
              <div className="relative px-24">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-60 object-cover border-black border-2"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-xs mx-24 px-2 py-1">
                  {caseItem.date}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center">{caseItem.title}</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {caseItem.description}
                </p>
                <div className="flex justify-center">
                <button className="mt-6 px-6 py-2 text-sm shadow-md border-2 border-brown bg-transparent text-brown hover:border-brown hover:bg-brown hover:border-2 hover:shadow-none hover:text-white">
                  Read More
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </section>
    </>
  );
};

const Pagination = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        &lt;
      </button>
      <button className="px-3 py-1 bg-brown text-white">1</button>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        2
      </button>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        3
      </button>
      <span className="px-3 py-1 text-gray-700">...</span>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        19
      </button>
      <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700">
        &gt;
      </button>
    </div>
  );
};

const cases = [
  {
    date: "3 Januari 2022",
    title: "Defending Tenant Rights",
    description:
      "Successfully defended a group of tenants facing unjust eviction from their apartments.",
    image: familyLaw
  },
  {
    date: "3 Januari 2022",
    title: "Personal Injury Compensation",
    description:
      "Helped a client who suffered severe injuries in a car accident caused by a negligent driver.",
    image: familyLaw
  },
  {
    date: "3 Januari 2022",
    title: "Personal Injury Compensation",
    description:
      "Helped a client who suffered severe injuries in a car accident caused by a negligent driver.",
    image: familyLaw
  },
  {
    date: "3 Januari 2022",
    title: "Defending Tenant Rights",
    description:
      "Successfully defended a group of tenants facing unjust eviction from their apartments.",
    image: familyLaw
  },
];

export default ContactUs;
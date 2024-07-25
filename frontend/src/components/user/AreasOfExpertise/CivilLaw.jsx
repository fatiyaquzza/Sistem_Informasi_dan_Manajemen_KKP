import React from "react";
import { useNavigate } from "react-router-dom";
import home1 from "../../../images/home1.png";

const CivilLaw = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">
        <div className="relative z-10 text-center text-white p-4 md:p-8 mx-6 md:md-6">
          <h1 className="text-4xl md:text-7xl font-bold border-b py-4 md:py-10 border-white ">Civil Law</h1>
          {/* <p className="text-xl mt-4 font-light">
            Here to Assist. Ready to Listen. Committed to Your Cause.
          </p> */}
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
  className="bg-primarywhite text-black py-12 font-Lato px-16"
>
  <p className="text-md md:text-lg lg:text-xl mt-4 font-light text-justify leading-relaxed">
    Criminal law deals with behavior that is or can be construed as an offense
    against the public, society, or the state—even if the immediate victim is
    an individual. This area of law includes offenses such as theft, assault,
    robbery, fraud, and other criminal activities that disrupt public order and
    safety.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <div className="order-2 md:order-1">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
        Our Civil Law Services Include:
      </h2>
      <ol className="list-decimal ml-5 md:ml-6 space-y-8 text-lg md:text-xl lg:text-2xl">
        <li>
          <h3 className="font-semibold">Theft and Fraud</h3>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg lg:text-xl space-y-2">
            <li>
              Legal Representation:{" "}
              <span className="font-light">
                Providing expert legal defense and representation for theft and
                fraud charges.
              </span>
            </li>
            <li>
              Investigation Services:{" "}
              <span className="font-light">
                Assisting in the investigation and gathering of evidence to
                support your case.
              </span>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">Assault and Battery</h3>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg lg:text-xl space-y-2">
            <li>
              Legal Defense:{" "}
              <span className="font-light">
                Offering strong defense strategies for assault and battery
                charges.
              </span>
            </li>
            <li>
              Victim Support:{" "}
              <span className="font-light">
                Providing legal support and representation for victims of
                assault and battery.
              </span>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">Drug Offenses</h3>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg lg:text-xl space-y-2">
            <li>
              Case Analysis:{" "}
              <span className="font-light">
                Thorough analysis of drug offense cases to build a robust
                defense strategy.
              </span>
            </li>
            <li>
              Legal Advocacy:{" "}
              <span className="font-light">
                Advocating for reduced charges or alternative sentencing
                options.
              </span>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">Domestic Violence</h3>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg lg:text-xl space-y-2">
            <li>
              Protective Orders:{" "}
              <span className="font-light">
                Assisting in obtaining protective orders and legal protections
                for victims of domestic violence.
              </span>
            </li>
            <li>
              Legal Support:{" "}
              <span className="font-light">
                Providing legal representation to address domestic violence
                issues and ensure your safety.
              </span>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold">White Collar Crimes</h3>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg lg:text-xl space-y-2">
            <li>
              Fraud and Embezzlement:{" "}
              <span className="font-light">
                Expert legal defense for cases involving fraud, embezzlement,
                and other white-collar crimes.
              </span>
            </li>
            <li>
              Compliance Guidance:{" "}
              <span className="font-light">
                Providing guidance on regulatory compliance to prevent future
                legal issues.
              </span>
            </li>
          </ul>
        </li>
      </ol>
    </div>

    <div className="flex justify-center items-center order-1 md:order-2">
      <img
        src={home1}
        alt="lawyer"
        className="w-full h-auto shadow-md transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>

  <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/expertise")}
            className="px-5 py-2 text-sm bg-brown text-white shadow-md border-solid border-2 border-brown hover:bg-transparent hover:text-brown transition duration-300 font-semibold"
          >
            Back to Areas of Expertise
          </button>
        </div>
      </section>

    </>
  );
};

export default CivilLaw;

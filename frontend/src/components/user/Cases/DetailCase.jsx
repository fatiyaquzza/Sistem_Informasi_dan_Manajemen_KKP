import React from "react";
import { useNavigate } from "react-router-dom";
import member1 from "../../../images/member1.jpg"; 


const DetailCase = () => {
    const navigate = useNavigate();
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center bg-black font-Lato">

        <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl pb-10  border-white ">Case</h1>
          <h1 className="text-6xl bg-black2 font-bold border-2 border-solid px-20 py-10 border-white">Defending Tenant Rights</h1>
       
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

      <section id="section2" className="bg-primarywhite text-black px-16 py-24 font-Lato">
        <div className="flex">
          <div className="w-1/4 pr-10">
            <p className="font-semibold">Last Updated:</p>
            <p>23 Juni 2024 / 07:21 PM WIB</p>
            <p className="mt-6 font-semibold">Team:</p>
            <div className="flex items-center mt-2">
              <img src={member1} alt="Team member 1" className="w-20 h-20 rounded-full object-cover" />
              <p className="ml-2">Michael J. McKenna</p>
            </div>
            <div className="flex items-center mt-2">
              <img src={member1} alt="Team member 2" className="w-20 h-20 rounded-full object-cover mt-4" />
              <p className="ml-2">Sarah L. O'Neill</p>
            </div>
            <div className="flex items-center mt-2">
              <img src={member1} alt="Team member 3" className="w-20 h-20 rounded-full object-cover mt-4" />
              <p className="ml-2">James T. Wilson</p>
            </div>
          </div>
          <div className="w-3/4 text-justify">
            <h2 className="text-3xl font-semibold">Background</h2>
            <p className="mt-4">
              In early 2024, a tenant faced an unjust eviction notice from their landlord,
              which was alleged to be retaliatory in nature due to the tenant exercising
              their legal right to request necessary repairs to the property. The landlord
              issued an eviction notice without proper legal grounds, prompting the tenant
              to seek legal assistance from our organization.
            </p>
            <h2 className="text-3xl font-semibold mt-10">Actions Taken</h2>
            <p className="mt-4">
              Our legal team began with a thorough review of the eviction notice and the
              tenant's lease agreement during the initial consultation. Following this, we
              filed a formal complaint with the local housing authority and initiated legal
              proceedings to contest the eviction. We meticulously gathered evidence of the
              landlord's retaliatory actions, including communication records and
              documentation of the requested repairs. Throughout the process, we engaged in
              negotiations with the landlord's legal representatives to seek an amicable
              resolution. Ultimately, our team represented the tenant in court, presenting
              a strong case demonstrating the illegality of the eviction notice.
            </p>
            <h2 className="text-3xl font-semibold mt-10">Outcome</h2>
            <p className="mt-4">
              Our legal team began with a thorough review of the eviction notice and the
              tenant's lease agreement during the initial consultation. Following this, we
              filed a formal complaint with the local housing authority and initiated legal
              proceedings to contest the eviction. We meticulously gathered evidence of the
              landlord's retaliatory actions, including communication records and
              documentation of the requested repairs. Throughout the process, we engaged in
              negotiations with the landlord's legal representatives to seek an amicable
              resolution. Ultimately, our team represented the tenant in court, presenting
              a strong case demonstrating the illegality of the eviction notice.
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <button
            onClick={() => navigate("/cases")}
            className="mt-10 border-2 border-brown border-solid bg-brown text-white text-sm font-semibold mb-2 px-6 py-3 hover:bg-transparent hover:text-brown"
          >
            Back to Cases
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailCase;

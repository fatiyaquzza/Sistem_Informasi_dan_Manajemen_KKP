import React, { useState, useEffect } from "react";
import { getLawyers } from "../../../service/LawyerService";
import { Link } from "react-router-dom";

const Home5 = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const data = await getLawyers();
        setLawyers(data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    fetchLawyers();
  }, []);

  const selectedLawyers = lawyers.slice(0, 3);

  return (
    <>
<section className="bg-softgray text-center  py-24 px-16">
      <p className="text-md font-Lato font-light  mb-2">OUR TEAM</p>
      <h2 className="text-5xl font-Cinzel font-bold text-brown mb-10">MEET OUR TEAM</h2>
      <div className="flex justify-around font-Lato">
      {selectedLawyers.map((lawyer) => (
        <div key={lawyer.id} className="w-1/3 p-4">
          <img src={lawyer.url} alt="Team Member" className="w-[420px] h-[600px] object-cover border-solid border-2 border-brown" />
          <p className="font-bold mt-4">{lawyer.name}</p>
          <p className="text-brown italic">{lawyer.position}</p>
        </div>
      ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/team" className="border-solid border-2 border-brown text-brown bg-transparent hover:bg-brown hover:text-white text-sm font-semibold py-3 px-6">
        View All Team Members
        </Link>
        </div>
    </section>
    </>
  );
};

export default Home5;
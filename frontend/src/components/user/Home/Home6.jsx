import React, { useState } from "react";

const Home6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "Bagaimana cara mengajukan permohonan bantuan hukum?",
      answer:
        "Anda bisa mengajukan permohonan bantuan hukum dengan mengunjungi kantor kami secara langsung dan membawa surat keterangan kurang mampu dari kepala desa.",
    },
    {
      question:
        "Siapa saja yang bisa mendapatkan bantuan hukum dari lembaga ini?",
      answer:
        "Semua masyarakat yang membutuhkan bantuan hukum dapat mengajukan permohonan kepada kami.",
    },
    {
      question:
        "Berapa lama waktu yang dibutuhkan untuk mendapatkan bantuan hukum?",
      answer:
        "Waktu yang dibutuhkan bervariasi tergantung pada kompleksitas kasus Anda.",
    },
    {
      question:
        "Apakah saya perlu membawa dokumen tertentu saat mengajukan bantuan hukum?",
      answer:
        "Ya, Anda perlu membawa dokumen yang relevan dengan kasus Anda saat mengajukan permohonan.",
    },
    {
      question: "Bagaimana saya bisa mengetahui perkembangan kasus saya?",
      answer:
        "Anda bisa mengetahui perkembangan kasus Anda dengan menghubungi tim kami secara langsung.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-brown text-white py-24 px-8 md:px-16 justify-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-Cinzel font-bold mb-6 md:mb-10">
          Frequently Asked Question <br />
          (FAQ)
        </h2>
      </div>
      <div className="max-w-5xl mx-auto">
        {questionsAnswers.map((item, index) => (
          <div key={index} className="border-b border-gray-400 py-4">
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg md:text-xl font-Lato my-2 md:my-4">
                {item.question}
              </span>
              <span className="text-xl md:text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-sm md:text-lg text-justify font-semibold">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home6;

import React from 'react';

const ActionButton: React.FC<{ children: React.ReactNode, href?: string }> = ({ children, href = "#" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#00abf0] text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-[#00abf0]/30 transform hover:scale-105"
  >
    {children}
  </a>
);

const Projects: React.FC = () => {
  return (
    <section id="projek" className="py-20 bg-[#0b2232]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Sertifikat & Tugas Axioo
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <ActionButton href="https://zanovaexe22.github.io/ARRAHMAN/sertifikat.html">SERTIFIKAT</ActionButton>
          <ActionButton href="https://zanovaexe22.github.io/ARRAHMAN/axioo.html">TUGAS AXIOO</ActionButton>
          <ActionButton href="https://zanovaexe22.github.io/ARRAHMAN/index.html#">INFO TERUPDATE</ActionButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;

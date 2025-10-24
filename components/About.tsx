
import React from 'react';

const SkillBar: React.FC<{ skill: string; percentage: number }> = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-white">{skill}</span>
      <span className="text-sm font-medium text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-[#00abf0] h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const About: React.FC = () => {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'Javascript', percentage: 80 },
    { name: 'PHP', percentage: 75 },
    { name: 'Figma', percentage: 85 },
  ];

  return (
    <section id="tentang-saya" className="py-20 bg-[#0b2232]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Tentang Saya
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 w-full flex justify-center">
            <img
              src="https://picsum.photos/400/400?random=2"
              alt="Zanova"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-[#00abf0]"
            />
          </div>
          <div className="lg:w-2/3 w-full">
            <h3 className="text-3xl font-semibold text-[#00abf0] mb-4">
              Fullstack Developer & UI/UX Designer
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Saya adalah seorang pengembang fullstack dan desainer UI/UX yang bersemangat dalam menciptakan aplikasi web yang fungsional dan menarik secara visual. Dengan keahlian di bidang frontend dan backend, serta pemahaman mendalam tentang prinsip-prinsip desain, saya berdedikasi untuk memberikan solusi digital yang inovatif dan user-friendly.
            </p>
             <a
              href="#"
              className="inline-block bg-transparent border-2 border-[#00abf0] text-[#00abf0] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#00abf0] hover:text-white transition-all duration-300 mt-4"
            >
              Baca Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-slide-in-left">
          HI, SAYA ZANOVA.
        </h1>
        <div className="animate-slide-in-bottom">
          <p className="text-2xl md:text-3xl text-[#00abf0] font-semibold mb-8">
            Fullstack Developer & UI/UX Designer
          </p>
          <a
            href="#hubungi-saya"
            className="inline-block bg-[#00abf0] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-[#00abf0]/30"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

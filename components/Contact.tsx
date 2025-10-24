
import React from 'react';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#00abf0]">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#00abf0]">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#00abf0]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, detail, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-[#0c2a3f] p-6 rounded-lg flex flex-col items-center text-center w-full sm:w-auto transform hover:scale-105 transition-transform duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
    <p className="text-gray-400">{detail}</p>
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="hubungi-saya" className="py-20 bg-[#081b29]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Hubungi Saya</h2>
        <p className="text-lg text-gray-400 mb-12">DAPATKAN KONTAK SAYA</p>
        <div className="flex flex-wrap justify-center gap-8">
          <ContactCard
            icon={<MailIcon />}
            title="Email"
            detail="zanovaputra22@gmail.com"
            href="mailto:zanovaputra22@gmail.com"
          />
          <ContactCard
            icon={<WhatsAppIcon />}
            title="WhatsApp"
            detail="0822-8789-7621"
            href="https://wa.me/6282287897621"
          />
          <ContactCard
            icon={<InstagramIcon />}
            title="Instagram"
            detail="zanova_exe"
            href="https://www.instagram.com/zanova_exe"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

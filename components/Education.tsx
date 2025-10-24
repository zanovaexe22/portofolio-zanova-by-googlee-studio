
import React from 'react';

interface EducationItemProps {
  school: string;
  period: string;
  isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ school, period, isLast }) => (
    <div className="relative pl-8 sm:pl-10 lg:pl-12">
        {!isLast && <div className="absolute top-2 left-1.5 w-0.5 h-full bg-[#00abf0] -translate-x-1/2"></div>}
        <div className="absolute top-2 left-1.5 w-3 h-3 bg-white rounded-full -translate-x-1/2 border-2 border-[#00abf0]"></div>
        <div className="p-4 bg-[#0c2a3f] rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-[#00abf0]">{school}</h3>
            <p className="text-gray-300">{period}</p>
        </div>
    </div>
);

const Education: React.FC = () => {
    const educationHistory = [
        { school: "SD NEGERI 2 KOTO BARU", period: "2014 - 2020" },
        { school: "MTSN 1 KOTA SUNGAI PENUH", period: "2020 - 2023" },
        { school: "SMK NEGERI 2 SUNGAI PENUH", period: "2023 - 2026" },
    ];

    return (
        <section id="pendidikan" className="py-20 bg-[#081b29]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Pendidikan
                </h2>
                <div className="max-w-3xl mx-auto">
                    {educationHistory.map((item, index) => (
                        <EducationItem 
                            key={index} 
                            school={item.school} 
                            period={item.period}
                            isLast={index === educationHistory.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

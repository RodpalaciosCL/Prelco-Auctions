import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const companies = [
    {
      name: "Anglo American",
      logo: "https://150824981.v2.pressablecdn.com/wp-content/uploads/2020/06/anglo-american-logo.jpg"
    },
    {
      name: "BHP",
      logo: "https://1000marcas.net/wp-content/uploads/2021/06/BHP-Billiton-logo.jpg"
    },
    {
      name: "Codelco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Codelco_logo.svg/800px-Codelco_logo.svg.png"
    },
    {
      name: "Glencore",
      logo: "https://1000marcas.net/wp-content/uploads/2021/06/Glencore-logo.jpg"
    },
    {
      name: "Antofagasta Minerals",
      logo: "https://www.aminerals.cl/images/default-source/default-album/logo_aminerals.png?sfvrsn=6d2d4d86_1"
    },
    {
      name: "Grupo México",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ws6N-YdMAhEkIPB_Dx3snGeLRIPcspfT9Q&s"
    },
    {
      name: "Teck",
      logo: "https://agunsa.com/wp-content/uploads/2022/07/teck.png"
    },
    {
      name: "Finning CAT",
      logo: "https://www.finning.com/content/dam/finning/Shared/finning-cat-logo.png"
    },
    {
      name: "Komatsu",
      logo: "https://1000marcas.net/wp-content/uploads/2020/11/Komatsu-Logo.png"
    }
  ];

  const visibleCount = 4; // Number of logos to show at once
  const maxIndex = companies.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex(current => Math.min(current + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(current => Math.max(current - 1, 0));
  };

  return (
    <div className="bg-[#2B614D] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white inline-block relative">
            Confían en nosotros
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#F5F2E9] rounded-full"></div>
          </h2>
        </div>
        
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg transition-opacity ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-[#2B614D]" />
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className="w-1/4 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center transition-transform hover:scale-105">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg transition-opacity ${
              currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-[#2B614D]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
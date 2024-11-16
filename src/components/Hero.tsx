import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <div className="relative bg-[#2B614D] overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <iframe
            src="https://www.youtube.com/embed/Mp8IXI1kzvQ?autoplay=1&mute=1&controls=0&loop=1&playlist=Mp8IXI1kzvQ&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&version=3&origin=http://localhost:5173&start=10&end=70"
            title="Mining Operations"
            className="absolute w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
            style={{ 
              opacity: 0.15,
              pointerEvents: 'none',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          />
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              La Plataforma de Subastas de Maquinaria de Minería más Moderna y Sustentable de la Región
            </h2>
            <p className="text-lg text-[#F5F2E9] mb-8">
              Conectamos a más de 950,000 compradores y vendedores de equipos mineros en todo el mundo, transaccionando más de $450 millones de dólares en los últimos 24 meses con las +20 compañías mineras más relevantes del mundo.
            </p>
            <button 
              onClick={onExploreClick}
              className="explore-button bg-white text-[#2B614D] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#F5F2E9] transition-colors"
            >
              Explorar Subastas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Filters from './components/Filters';
import AuctionGrid from './components/AuctionGrid';
import AuctionDetail from './components/AuctionDetail';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import TrustedCompanies from './components/TrustedCompanies';
import ContactSection from './components/ContactSection';
import { FilterState } from './types';
import { auctionData } from './data/auctions';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    minPrice: 0,
    maxPrice: 0,
    condition: '',
    status: ''
  });

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  const handlePlaceBid = (amount: number) => {
    alert(`Oferta de $${amount.toLocaleString()} realizada con éxito!`);
  };

  const filteredItems = auctionData.filter(item => {
    if (filters.category && item.category !== filters.category) return false;
    if (filters.condition && item.condition !== filters.condition) return false;
    if (filters.status && item.status !== filters.status) return false;
    if (filters.minPrice && item.currentBid < filters.minPrice) return false;
    if (filters.maxPrice && item.currentBid > filters.maxPrice) return false;
    return true;
  });

  return (
    <Router>
      <div className="min-h-screen bg-[#2B614D] flex flex-col">
        <Header onAuthClick={handleAuthClick} />
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero onExploreClick={() => {}} />
              <Stats />
              <TrustedCompanies />
              <main className="flex-grow bg-[#F5F2E9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <button
                      className="md:hidden bg-[#2B614D] text-white px-4 py-2 rounded-md"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
                    </button>
                    
                    <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
                      <Filters filters={filters} setFilters={setFilters} />
                    </aside>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#2B614D]">
                          Subastas de Equipos Mineros
                        </h2>
                        <select className="w-full sm:w-auto rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2B614D]">
                          <option>Próximos a finalizar</option>
                          <option>Recién listados</option>
                          <option>Precio: Menor a Mayor</option>
                          <option>Precio: Mayor a Menor</option>
                        </select>
                      </div>
                      <AuctionGrid items={filteredItems} />
                    </div>
                  </div>
                </div>
              </main>
              <ContactSection />
            </>
          } />
          <Route path="/auction/:id" element={<AuctionDetail onPlaceBid={handlePlaceBid} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
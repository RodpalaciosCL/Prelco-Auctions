import { Search, Menu as MenuIcon, Bell, User, Zap } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onAuthClick: () => void;
}

export default function Header({ onAuthClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const menuItems = [
    { label: 'Instrucciones', href: '#' },
    { label: 'Asistencia Online', href: '#' },
    { label: 'Transporte', href: '#' },
    { label: 'Bases', href: '#' },
    { label: 'Martillero', href: 'https://northcountry.auctiontechs.com/', external: true },
    { 
      label: 'Grupo Prelco', 
      href: 'https://grupoprelco.com', 
      external: true,
      highlight: true 
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (!isSearchExpanded) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#2B614D]" />
              <span className="text-lg font-bold text-[#2B614D] hidden sm:inline">PRELCO AUCTIONS</span>
              <span className="text-lg font-bold text-[#2B614D] sm:hidden">PRELCO</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`text-gray-600 hover:text-[#2B614D] text-sm transition-colors ${
                    item.highlight ? 'font-bold text-[#2B614D] hover:text-[#1a3b2f]' : 'font-medium'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Search Button */}
            <button
              onClick={handleSearchClick}
              className="hidden md:flex p-2 text-gray-400 hover:text-[#2B614D] transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={onAuthClick}
              className="bg-[#2B614D] text-white px-4 py-2 rounded-md hover:bg-[#1a3b2f] transition-colors whitespace-nowrap text-sm"
            >
              Iniciar Sesión
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#2B614D]"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`block px-4 py-3 hover:bg-gray-50 text-sm ${
                  item.highlight ? 'font-bold text-[#2B614D]' : 'text-gray-600 font-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* Desktop Search Bar - Now positioned below the header */}
        {isSearchExpanded && (
          <div ref={searchRef} className="hidden md:block border-t border-gray-100">
            <div className="px-4 py-3">
              <div className="relative max-w-2xl mx-auto">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Buscar equipos..."
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#2B614D]"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Search */}
        <div className="px-4 py-2 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar equipos..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B614D] text-sm"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
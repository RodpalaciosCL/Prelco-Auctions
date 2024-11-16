import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-[#2B614D]" />
            <span className="text-sm font-bold text-[#2B614D]">PRELCO AUCTIONS</span>
          </div>
          <div className="text-xs text-gray-500">
            <span className="text-[#2B614D] font-medium">Powered by Prelco Technologies</span>
            <span className="mx-2">•</span>
            <a 
              href="https://www.northcountry-auctions.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#2B614D] transition-colors"
            >
              In partnership with NorthCountry-Auctions USA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
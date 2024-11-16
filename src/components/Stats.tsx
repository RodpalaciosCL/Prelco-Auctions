import React from 'react';
import { Users, DollarSign, Building } from 'lucide-react';

export default function Stats() {
  return (
    <div className="bg-[#2B614D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-[#F5F2E9] mb-4" />
            <div className="text-4xl font-bold text-white mb-2">950,000+</div>
            <div className="text-[#F5F2E9]">Clientes Globales</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <DollarSign className="h-12 w-12 text-[#F5F2E9] mb-4" />
            <div className="text-4xl font-bold text-white mb-2">$450M+</div>
            <div className="text-[#F5F2E9]">En los últimos 24 meses</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Building className="h-12 w-12 text-[#F5F2E9] mb-4" />
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-[#F5F2E9]">Compañías Mineras</div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Clock, Heart } from 'lucide-react';
import { AuctionItem } from '../types';
import { Link } from 'react-router-dom';

interface AuctionGridProps {
  items: AuctionItem[];
}

export default function AuctionGrid({ items }: AuctionGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            {item.status === 'active' ? (
              <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            ) : (
              <div className="absolute top-2 right-2 px-2 py-1 bg-gray-900 bg-opacity-75 rounded-md">
                <span className="text-white text-xs font-medium">Finalizado</span>
              </div>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 h-14 line-clamp-2">
              {item.title}
            </h3>
            
            <div className="flex flex-col space-y-2">
              {item.status === 'active' ? (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Oferta Actual</span>
                    <span className="text-sm text-gray-500">{item.bids} ofertas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#2B614D]">
                      USD ${item.currentBid.toLocaleString()}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{item.endTime}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Oferta Ganadora</span>
                    <span className="text-sm text-gray-500">Finalizado el {item.endDate}</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-lg font-bold text-[#2B614D]">
                      USD ${item.winningBid?.toLocaleString()}
                    </span>
                    <div className="text-left text-gray-500">
                      Subasta Finalizada
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 flex justify-center items-center h-10">
              {item.status === 'active' ? (
                <Link
                  to={`/auction/${item.id}`}
                  className="block w-full bg-[#2B614D] text-white text-center py-2 rounded-md hover:bg-[#1a3b2f] transition-colors"
                >
                  Ofertar
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
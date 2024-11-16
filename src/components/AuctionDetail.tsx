import React, { useState, useRef } from 'react';
import { ArrowLeft, Clock, Eye, FileText, Wrench, MapPin, AlertTriangle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { auctionData } from '../data/auctions';

interface AuctionDetailProps {
  onPlaceBid: (amount: number) => void;
}

const USD_TO_CLP = 980;

const AuctionDetail: React.FC<AuctionDetailProps> = ({ onPlaceBid }) => {
  const { id } = useParams();
  const [bidAmount, setBidAmount] = useState('');
  const [showBidConfirm, setShowBidConfirm] = useState(false);
  
  const item = auctionData.find(item => item.id === id);
  
  if (!item) return <div>Subasta no encontrada</div>;

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBidConfirm(true);
  };

  const confirmBid = () => {
    onPlaceBid(Number(bidAmount));
    setShowBidConfirm(false);
    setBidAmount('');
    alert('¡Oferta realizada con éxito!');
  };

  const nextMinBid = item.currentBid + (item.currentBid * 0.05);
  const currentBidCLP = Math.round(item.currentBid * USD_TO_CLP).toLocaleString('es-CL');
  const nextMinBidCLP = Math.round(nextMinBid * USD_TO_CLP).toLocaleString('es-CL');
  const bidAmountCLP = bidAmount ? Math.round(Number(bidAmount) * USD_TO_CLP).toLocaleString('es-CL') : '0';

  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <div className="sticky top-0 z-40 bg-[#F5F2E9] border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-[#2B614D] hover:text-[#1a3b2f] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Volver a Subastas</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h1>
              
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-lg object-cover w-full h-[400px]"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">Año</span>
                  </div>
                  <div className="font-semibold">2019</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Eye className="h-4 w-4 mr-2" />
                    <span className="text-sm">Vistas</span>
                  </div>
                  <div className="font-semibold">234</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Wrench className="h-4 w-4 mr-2" />
                    <span className="text-sm">Condición</span>
                  </div>
                  <div className="font-semibold capitalize">{item.condition}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-gray-600 mb-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Ubicación</span>
                  </div>
                  <div className="font-semibold">Antofagasta, CL</div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Descripción</h2>
                <div className="prose max-w-none">
                  <p>{item.description}</p>
                  <ul className="mt-4 space-y-2">
                    <li>Motor: Caterpillar C18 ACERT</li>
                    <li>Potencia: 523 HP</li>
                    <li>Peso operativo: 90,000 kg</li>
                    <li>Horómetro: 3,200 hrs</li>
                    <li>Capacidad del cucharón: 5.7 m³</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Documentos</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-[#2B614D] mr-3" />
                  <div>
                    <div className="font-medium">Informe Técnico</div>
                    <div className="text-sm text-gray-500">PDF - 2.4 MB</div>
                  </div>
                </a>
                <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-[#2B614D] mr-3" />
                  <div>
                    <div className="font-medium">Historial de Mantenimiento</div>
                    <div className="text-sm text-gray-500">PDF - 1.8 MB</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Oferta Actual</div>
                <div className="text-3xl font-bold text-[#2B614D] mb-1">
                  USD ${item.currentBid.toLocaleString()}
                </div>
                <div className="text-lg text-gray-600">
                  CLP ${currentBidCLP}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  {item.bids} ofertas · {item.endTime} restantes
                </div>
              </div>

              <form onSubmit={handleBidSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tu Oferta
                  </label>
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="number"
                        min={nextMinBid}
                        step="1000"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2B614D]"
                        placeholder={`Mínimo USD $${nextMinBid.toLocaleString()}`}
                      />
                    </div>
                    {bidAmount && (
                      <div className="text-sm text-gray-600">
                        Equivalente a CLP ${bidAmountCLP}
                      </div>
                    )}
                    <div className="text-xs text-gray-500">
                      Oferta mínima: USD ${nextMinBid.toLocaleString()} (CLP ${nextMinBidCLP})
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2B614D] text-white py-3 rounded-md hover:bg-[#1a3b2f] transition-colors mb-4 bid-button"
                >
                  Realizar Oferta
                </button>
              </form>

              <div className="border-t pt-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span>Información Importante</span>
                </div>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Incremento mínimo: 5% sobre oferta actual</li>
                  <li>• Comisión del comprador: 10%</li>
                  <li>• Tiempo de extensión: 10 minutos</li>
                  <li>• Tipo de cambio referencial: USD 1 = CLP {USD_TO_CLP}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bid Confirmation Modal */}
      {showBidConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Confirmar Oferta</h3>
            <div className="mb-4">
              <p className="mb-2">¿Estás seguro que deseas ofertar:</p>
              <p className="font-semibold text-[#2B614D]">USD ${Number(bidAmount).toLocaleString()}</p>
              <p className="text-gray-600">CLP ${bidAmountCLP}</p>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowBidConfirm(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmBid}
                className="px-4 py-2 bg-[#2B614D] text-white rounded-md hover:bg-[#1a3b2f] bid-button"
              >
                Confirmar Oferta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionDetail;
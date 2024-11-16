import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email to rpalacios@grupoprelco.com
    const mailtoLink = `mailto:rpalacios@grupoprelco.com?subject=Contacto desde Prelco Auctions&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0AMensaje: ${formData.message}`;
    window.location.href = mailtoLink;
    
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      name: "Centro Logístico",
      address: "La Negra, Antofagasta, Chile",
      coordinates: [-23.6345, -70.3791]
    },
    {
      name: "Casa Matriz",
      address: "Los Abedules 3082, Vitacura, Chile",
      coordinates: [-33.3844, -70.5869]
    },
    {
      name: "Remates en Vivo",
      address: "Hotel W, Isidora Goyenechea 3000, Las Condes, Chile",
      coordinates: [-33.4175, -70.6048]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Nuestras Ubicaciones</h2>
          <p className="mt-4 text-lg text-gray-600">
            Visítanos en nuestras oficinas o contáctanos para más información
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-[400px]">
              <MapContainer
                center={[-33.4489, -70.6693]}
                zoom={5}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location, index) => (
                  <Marker 
                    key={index} 
                    position={[location.coordinates[0], location.coordinates[1]]}
                  >
                    <Popup>
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-600">{location.address}</div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[#2B614D] rounded-full"></div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">{location.name}</h3>
                      <p className="text-sm text-gray-500">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contáctanos</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2B614D] focus:outline-none focus:ring-1 focus:ring-[#2B614D]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2B614D] focus:outline-none focus:ring-1 focus:ring-[#2B614D]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2B614D] focus:outline-none focus:ring-1 focus:ring-[#2B614D]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2B614D] focus:outline-none focus:ring-1 focus:ring-[#2B614D]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-[#2B614D] text-white px-4 py-2 rounded-md hover:bg-[#1a3b2f] transition-colors"
              >
                <Send className="h-5 w-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl animate-fade-in">
            <h3 className="text-xl font-bold text-[#2B614D] mb-2">¡Gracias por tu mensaje!</h3>
            <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
          </div>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { FilterState } from '../types';

interface FiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Filtros</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estado
          </label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Todos los Estados</option>
            <option value="active">Subastas Activas</option>
            <option value="ended">Subastas Pasadas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Todas las Categorías</option>
            <option value="excavadoras">Excavadoras</option>
            <option value="camiones">Camiones Mineros</option>
            <option value="gruas">Grúas</option>
            <option value="cargadores">Cargadores Frontales</option>
            <option value="otros">Otros Equipos</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rango de Precio (USD)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
              placeholder="Mín"
              className="w-1/2 rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
              placeholder="Máx"
              className="w-1/2 rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Condición
          </label>
          <select
            value={filters.condition}
            onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Cualquier Condición</option>
            <option value="excelente">Excelente</option>
            <option value="bueno">Bueno</option>
            <option value="regular">Regular</option>
            <option value="malo">Malo</option>
          </select>
        </div>
      </div>
    </div>
  );
}
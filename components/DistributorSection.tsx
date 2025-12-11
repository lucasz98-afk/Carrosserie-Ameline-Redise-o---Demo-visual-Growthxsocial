import React from 'react';
import { DISTRIBUTORS } from '../constants';
import { MapPin, Plus, Minus, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const DistributorSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-xl overflow-hidden border border-gray-100">
            
            {/* Sidebar List - Scrollable */}
            <div className="lg:col-span-4 flex flex-col">
                <h2 className="font-serif text-3xl md:text-4xl text-dark mb-10">Encontrar un distribuidor</h2>
                
                <div className="space-y-8 pr-4 max-h-[500px] overflow-y-auto custom-scrollbar">
                    {DISTRIBUTORS.map((dist, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group pl-4 border-l-2 border-gray-200 hover:border-gold transition-colors duration-300 py-1"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                                    {dist.country}
                                </span>
                            </div>
                            <h3 className="font-bold text-dark text-base group-hover:text-gold transition-colors">{dist.name}</h3>
                            <a href={dist.url} className="text-sm text-gray-500 hover:underline block mt-1 truncate" target="_blank" rel="noopener noreferrer">
                                {dist.url}
                            </a>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                {dist.address}
                            </p>
                            {dist.phone && (
                                <p className="text-xs text-gray-500 mt-1 font-medium">
                                    Tel: {dist.phone}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Map Area */}
            <div className="lg:col-span-8 relative h-[500px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden bg-[#e0e3eb] shadow-inner border border-gray-200 group/map">
                 {/* Flat "Google Maps Style" Image */}
                 <div className="absolute inset-0 bg-[#e0e3eb]">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Europe_location_map.svg/1280px-Europe_location_map.svg.png" 
                        alt="Map of Europe" 
                        className="w-full h-full object-cover object-center opacity-40 grayscale contrast-125 mix-blend-multiply"
                    />
                 </div>
                 
                 {/* Fake UI Controls for Google Maps feel */}
                 <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                    <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-dark hover:bg-gray-50 transition-colors">
                        <Plus size={20} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-dark hover:bg-gray-50 transition-colors">
                        <Minus size={20} />
                    </button>
                 </div>
                 
                 <div className="absolute top-6 left-6">
                    <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md text-xs font-bold text-gray-600 hover:text-dark hover:bg-gray-50 transition-colors">
                        <Layers size={14} />
                        <span>Mapa</span>
                    </button>
                 </div>

                 {/* Dynamic Pins Overlay */}
                 {DISTRIBUTORS.map((dist, idx) => (
                    <div 
                        key={idx}
                        className="absolute group cursor-pointer z-10"
                        style={{ top: dist.mapCoordinates.top, left: dist.mapCoordinates.left }}
                    >
                        <MapPin 
                            className="text-red-500 drop-shadow-md transform -translate-x-1/2 -translate-y-full hover:scale-125 transition-transform duration-300" 
                            size={32} 
                            fill="currentColor" 
                            stroke="white"
                            strokeWidth={1.5}
                        />
                        {/* Pulse effect for pins */}
                        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-full w-full h-full bg-red-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-dark text-xs font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-20 border border-gray-100 translate-y-2 group-hover:translate-y-0">
                            {dist.name}
                            <span className="block text-[10px] text-gray-400 font-normal uppercase mt-0.5">{dist.country}</span>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-100"></div>
                        </div>
                    </div>
                 ))}

                 <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-[10px] font-medium border border-gray-100 text-gray-500">
                    Datos de mapas &copy; {new Date().getFullYear()} Carrosserie Ameline
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DistributorSection;
import React from 'react';
import { DISTRIBUTORS } from '../constants';
import { MapPin } from 'lucide-react';
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
            <div className="lg:col-span-8 relative h-[500px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden bg-[#e6e6e6] shadow-inner border border-gray-200">
                 {/* Conventional Static Map Image */}
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/2202px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png" 
                    alt="Map of Europe" 
                    className="w-full h-full object-cover object-center opacity-80"
                    style={{ objectPosition: '40% 40%' }} // Center slightly on Western Europe
                 />
                 
                 {/* Dynamic Pins Overlay */}
                 {DISTRIBUTORS.map((dist, idx) => (
                    <div 
                        key={idx}
                        className="absolute group cursor-pointer z-10"
                        style={{ top: dist.mapCoordinates.top, left: dist.mapCoordinates.left }}
                    >
                        <MapPin 
                            className="text-red-600 drop-shadow-md transform -translate-x-1/2 -translate-y-full hover:scale-125 transition-transform duration-300" 
                            size={28} 
                            fill="currentColor" 
                        />
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 border border-gray-100">
                            {dist.name}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-100"></div>
                        </div>
                    </div>
                 ))}

                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-medium border border-gray-100">
                    {DISTRIBUTORS.length} Distribuidores en Europa
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DistributorSection;
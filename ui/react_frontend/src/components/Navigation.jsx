import React from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'presentation', label: 'Modo Presentación' },
  { id: 'intro', label: 'Introducción' },
  { id: 'irreversible', label: 'Lógica irreversible' },
  { id: 'reversible', label: 'Lógica reversible' },
  { id: 'quantum', label: 'Circuito cuántico' },
  { id: 'advanced', label: 'Motor avanzado' },
  { id: 'comparison', label: 'Comparación final' },
];

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#02040a]/70 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(34,211,238,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-transparent border border-cyan-400 shadow-[0_0_10px_#22d3ee,inset_0_0_10px_#22d3ee] flex items-center justify-center text-cyan-400 font-bold">Q</div>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-500 tracking-widest uppercase text-sm">
              Quantum Terminal
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab.id ? 'text-cyan-300' : 'text-gray-500 hover:text-cyan-400'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-cyan-900/20 border-b-2 border-cyan-400 shadow-[0_4px_15px_-3px_rgba(34,211,238,0.5)]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

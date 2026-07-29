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
    <nav className="sticky top-0 z-50 w-full bg-[#060a1a]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] flex items-center justify-center text-black font-bold">Q</div>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-400">
              Quantum HUD 2026
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-white/5 border border-white/20 rounded-lg shadow-[inset_0_0_12px_rgba(168,85,247,0.3)]"
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

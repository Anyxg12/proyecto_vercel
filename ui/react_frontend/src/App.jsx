import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import PresentationMode from './components/PresentationMode';
import Intro from './components/Intro';
import IrreversibleLogic from './components/IrreversibleLogic';
import ReversibleLogic from './components/ReversibleLogic';
import QuantumCircuit from './components/QuantumCircuit';
import AdvancedMotor from './components/AdvancedMotor';
import Comparison from './components/Comparison';

function App() {
  const [activeTab, setActiveTab] = useState('presentation');
  const [simulationData, setSimulationData] = useState(null);

  // Global Quantum State
  const [theta, setTheta] = useState(90.0);
  const [phi, setPhi] = useState(0.0);
  const [inputA, setInputA] = useState(1);
  const [inputB, setInputB] = useState(1);
  const [control, setControl] = useState(1);
  const [target, setTarget] = useState(0);

  const fetchSimulation = async () => {
    try {
      const response = await fetch(`/api/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theta, phi, inputA, inputB, control, target })
      });
      const data = await response.json();
      setSimulationData(data);
    } catch (e) {
      console.error("Error fetching simulation data:", e);
    }
  };

  useEffect(() => {
    fetchSimulation();
  }, [theta, phi, inputA, inputB, control, target]);

  const renderTab = () => {
    switch (activeTab) {
      case 'presentation': return <PresentationMode key="presentation" />;
      case 'intro': return <Intro key="intro" />;
      case 'irreversible': return <IrreversibleLogic key="irreversible" logicData={simulationData?.logic?.and} inputA={inputA} setInputA={setInputA} inputB={inputB} setInputB={setInputB} />;
      case 'reversible': return <ReversibleLogic key="reversible" logicData={simulationData?.logic?.cnot} control={control} setControl={setControl} target={target} setTarget={setTarget} />;
      case 'quantum': return <QuantumCircuit key="quantum" quantumData={simulationData?.quantum} />;
      case 'advanced': return <AdvancedMotor key="advanced" theta={theta} setTheta={setTheta} phi={phi} setPhi={setPhi} quantumData={simulationData?.quantum} />;
      case 'comparison': return <Comparison key="comparison" />;
      default: return <PresentationMode key="presentation" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Sci-Fi Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0" 
           style={{ backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) scale(2.5) translateY(-50px)' }}>
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]"></div>

      <div className="relative z-10 flex flex-col h-full">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              className="w-full h-full"
            >
              {renderTab()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;

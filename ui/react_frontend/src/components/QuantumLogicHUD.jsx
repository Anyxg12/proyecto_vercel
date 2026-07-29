import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';
import { BitFlowCanvas } from './BitFlowCanvas';

export const QuantumLogicHUD = ({
  titulo = "Tablero Interactivo de Lógica React",
  tipoCompuerta = "CNOT",
  entrada = "(1, 0)",
  salida = "(1, 1)",
  fidelidad = 100.0,
  esReversible = true
}) => {
  return (
    <motion.div
      className="react-hud-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="react-hud-header">
        <div className="hud-title-group">
          <Cpu className="hud-title-icon" size={28} />
          <h2 className="hud-title">{titulo}</h2>
        </div>
        <span className="hud-badge">REACT FRONTEND COMPONENT</span>
      </div>

      <div className="react-hud-grid">
        <motion.div
          className="react-hud-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={18} color="#00f3ff" />
            <span className="card-header-label">Entrada / Salida</span>
          </div>
          <div className="card-value-display">
            {entrada} → {salida}
          </div>
        </motion.div>

        <motion.div
          className="react-hud-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#c084fc" />
            <span className="card-header-label">Propiedad Lógica</span>
          </div>
          <div className="card-value-display" style={{ color: esReversible ? "#4ade80" : "#00f3ff" }}>
            {esReversible ? "Biyectiva 1:1" : "No Inyectiva"}
          </div>
        </motion.div>

        <motion.div
          className="react-hud-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={18} color="#4ade80" />
            <span className="card-header-label">Fidelidad de Estado</span>
          </div>
          <div className="card-value-display">
            {fidelidad.toFixed(1)}% Intacta
          </div>
        </motion.div>
      </div>

      <BitFlowCanvas
        entrada={entrada}
        operacion={tipoCompuerta}
        salida={salida}
        color={esReversible ? "#c084fc" : "#00f3ff"}
      />
    </motion.div>
  );
};

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaWaveSquare } from "react-icons/fa";
import WaveformChart from "./WaveformChart";
import ControlsPanel from "./ControlsPanel";
import TheoryModal from "./TheoryModal";
import invertingCircuit from "../assets/inverting_circuit.png";
import nonInvertingCircuit from "../assets/non_inverting_circuit.png";

const OpampSimulator = () => {
  const [vin, setVin] = useState(1);
  const [rf, setRf] = useState(3.9);
  const [rin, setRin] = useState(1);
  const [mode, setMode] = useState("inverting");
  const [showTheory, setShowTheory] = useState(false);

  const gain = mode === "inverting" ? -(rf / rin) : 1 + rf / rin;
  const vout = parseFloat((gain * vin).toFixed(2));

  return (
    <motion.div
  className="simulator-container"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <motion.div
    className="left-panel"
    initial={{ x: -30, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2>OP-AMP Virtual Lab</h2>

    <div className="tabs">
      <button
        className={mode === "inverting" ? "active" : ""}
        onClick={() => setMode("inverting")}
      >
        Inverting
      </button>
      <button
        className={mode === "non-inverting" ? "active" : ""}
        onClick={() => setMode("non-inverting")}
      >
        Non-Inverting
      </button>
    </div>

    <img
      src={mode === "inverting" ? invertingCircuit : nonInvertingCircuit}
      alt="OPAMP Circuit Diagram"
      className="circuit-img"
    />

    <div className="theory-button">
      <button onClick={() => setShowTheory(true)} className="btn">
        <FaInfoCircle style={{ marginRight: "6px" }} />
        View Theory
      </button>
    </div>
  </motion.div>

  <motion.div
    className="right-panel"
    initial={{ x: 30, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <ControlsPanel
      vin={vin}
      setVin={setVin}
      rf={rf}
      setRf={setRf}
      rin={rin}
      setRin={setRin}
      mode={mode}
      setMode={setMode}
    />


    <motion.div
      className="result-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <p>
        Calculated Gain (A<sub>v</sub>) = <strong>{gain.toFixed(2)}</strong>
      </p>
      <p>
        Output Voltage (V<sub>out</sub>) = <strong>{vout} V</strong>
      </p>
    </motion.div>
  </motion.div>

<div className="graph-container">
  <WaveformChart vin={vin} vout={vout} mode={mode} />
</div>

  {showTheory && <TheoryModal onClose={() => setShowTheory(false)} />}
</motion.div>

  );
};

export default OpampSimulator;

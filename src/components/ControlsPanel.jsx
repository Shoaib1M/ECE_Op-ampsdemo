import React from "react";

const ControlsPanel = ({
  vin,
  setVin,
  rf,
  setRf,
  rin,
  setRin,
  mode,
  setMode,
}) => {
  return (
    <div className="controls">
      <h3>Adjust Parameters</h3>
      <label>
        Input Voltage (V): 
        <input
          type="number"
          value={vin}
          onChange={(e) => setVin(parseFloat(e.target.value))}
          step="0.1"
        />
      </label>
      <label>
        R<sub>f</sub> (kΩ): 
        <input
          type="number"
          value={rf}
          onChange={(e) => setRf(parseFloat(e.target.value))}
        />
      </label>
      <label>
        R<sub>in</sub> (kΩ):
        <input
          type="number"
          value={rin}
          onChange={(e) => setRin(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Mode:
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="inverting">Inverting</option>
          <option value="non-inverting">Non-Inverting</option>
        </select>
      </label>
    </div>
  );
};

export default ControlsPanel;

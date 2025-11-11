import React from "react";
import { motion } from "framer-motion";

const TheoryModal = ({ onClose }) => {
  return (
    // Overlay: clicking outside modal closes it
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <motion.div
        className="modal-content"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#071323",
          padding: "22px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          color: "#9be7ff",
          position: "relative",
        }}
      >
        {/* Top-right close button (visible) */}
        <button
          aria-label="Close theory modal"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "22px",
            lineHeight: 1,
            cursor: "pointer",
            color: "#9be7ff",
          }}
        >
          ×
        </button>

        <h2>Operational Amplifiers (IC 741)</h2>
        <p>
          An <strong>Operational Amplifier (Op-Amp)</strong> is a high-gain
          direct-coupled amplifier with differential inputs and a single output.
          It amplifies the voltage difference between the inverting (-) and
          non-inverting (+) terminals.
        </p>
        <p>
          In an ideal op-amp:
          <ul>
            <li>Input impedance is infinite (no input current flows).</li>
            <li>Output impedance is zero (perfect voltage source).</li>
            <li>Open-loop voltage gain is infinite.</li>
            <li>Bandwidth is infinite.</li>
            <li>Common-mode rejection ratio (CMRR) is infinite.</li>
          </ul>
        </p>

        <h3>Inverting Amplifier Configuration</h3>
        <p>
          In the <strong>inverting configuration</strong>, the input signal is
          applied through the input resistor (
          <em>
            R<sub>in</sub>
          </em>
          ) to the inverting terminal of the op-amp. The non-inverting terminal
          is grounded. The output is fed back to the inverting input via the
          feedback resistor (
          <em>
            R<sub>f</sub>
          </em>
          ), forming a negative feedback loop.
        </p>
        <p>The gain of the inverting amplifier is given by:</p>
        <p className="formula">
          V<sub>out</sub> = - (R<sub>f</sub> / R<sub>in</sub>) × V<sub>in</sub>
        </p>
        <p>
          The negative sign indicates that the output is 180° out of phase with
          the input. The input impedance of the inverting amplifier is equal to{" "}
          R<sub>in</sub>.
        </p>

        <h3>Non-Inverting Amplifier Configuration</h3>
        <p>
          In the <strong>non-inverting configuration</strong>, the input signal
          is applied to the non-inverting terminal of the op-amp. The feedback
          network (R<sub>f</sub> and R<sub>in</sub>) is connected between the
          output and the inverting input.
        </p>
        <p>The closed-loop voltage gain of the non-inverting amplifier is:</p>
        <p className="formula">
          V<sub>out</sub> = (1 + R<sub>f</sub> / R<sub>in</sub>) × V
          <sub>in</sub>
        </p>
        <p>
          Here, the output is in phase with the input. The input impedance of
          this configuration is extremely high, typically in the range of
          megaohms.
        </p>

        <h3>Practical Considerations</h3>
        <ul>
          <li>
            <strong>Input Offset Voltage:</strong> Small DC voltage difference
            required between inputs to make output zero.
          </li>
          <li>
            <strong>Bias Current:</strong> Small current entering op-amp input
            terminals.
          </li>
          <li>
            <strong>Slew Rate:</strong> Maximum rate of change of output voltage
            with time.
          </li>
          <li>
            <strong>Gain Bandwidth Product (GBP):</strong> Product of amplifier
            gain and bandwidth remains constant for a given op-amp.
          </li>
        </ul>

        <h3>Applications</h3>
        <ul>
          <li>Analog signal conditioning and amplification</li>
          <li>Active filters (Low-pass, High-pass)</li>
          <li>Voltage followers (buffers)</li>
          <li>Summing and differential amplifiers</li>
          <li>Integrator and differentiator circuits</li>
        </ul>

        <h3>Expected Waveforms</h3>
        <p>
          The inverting amplifier output waveform is an amplified and inverted
          version of the input signal. The non-inverting amplifier output
          follows the input waveform in phase but with higher amplitude,
          depending on gain.
        </p>

        <div className="note-box">
          <strong>Note:</strong> In your virtual simulation, adjusting the
          resistor ratio (R<sub>f</sub>/R<sub>in</sub>) changes the gain. For
          inverting mode, you’ll see phase reversal, while in non-inverting mode
          the waveform stays in phase.
        </div>

        <div style={{ marginTop: 12, textAlign: "right" }}>
          <button
            onClick={onClose}
            className="btn-close"
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              background: "#092033",
              border: "1px solid rgba(155,231,255,0.28)",
              color: "#9be7ff",
              borderRadius: "6px",
            }}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TheoryModal;

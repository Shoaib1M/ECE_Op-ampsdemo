import React from "react";
import { motion } from "framer-motion";

const TheoryModal = ({ onClose }) => {
  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="modal-content">
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

        <button onClick={onClose} className="btn-close">
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default TheoryModal;

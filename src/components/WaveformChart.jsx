import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const WaveformChart = ({ vin, vout, mode }) => {
  const time = Array.from({ length: 100 }, (_, i) => i * 0.1);
  const inputWave = time.map((t) => vin * Math.sin(2 * Math.PI * 0.1 * t));
  const outputWave = time.map((t) => vout * Math.sin(2 * Math.PI * 0.1 * t));

  return (
    <div className="chart-box">
      <h3>Input and Output Waveforms ({mode})</h3>
      <Line
        data={{
          labels: time,
          datasets: [
            {
              label: "Input (Vin)",
              data: inputWave,
              borderWidth: 2,
              borderColor: "blue",
            },
            {
              label: "Output (Vout)",
              data: outputWave,
              borderWidth: 2,
              borderColor: "red",
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            x: { title: { display: true, text: "Time (ms)" } },
            y: { title: { display: true, text: "Voltage (V)" } },
          },
        }}
      />
    </div>
  );
};

export default WaveformChart;

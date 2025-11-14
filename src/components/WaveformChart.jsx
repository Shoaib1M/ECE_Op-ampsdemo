import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const WaveformChart = ({ vin, vout, mode }) => {
  const time = Array.from({ length: 100 }, (_, i) => i * 0.1);
  const inputWave = time.map((t) => vin * Math.sin(2 * Math.PI * 0.1 * t));
  const outputWave = time.map((t) => vout * Math.sin(2 * Math.PI * 0.1 * t));

  const width = window.innerWidth;

  const smallScreen = width <= 450;
  const mediumScreen = width > 450 && width <= 1024;
  const largeScreen = width > 1024 && width <= 1600;
  const ultraWide = width > 1600;

  const chartHeight = smallScreen
    ? 240
    : mediumScreen
    ? 350
    : largeScreen
    ? 480
    : 600; 
  return (
    <div className="chart-box">
      <h3
        style={{
          fontSize: smallScreen ? "1rem" : largeScreen ? "1.6rem" : "1.3rem",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Input and Output Waveforms ({mode})
      </h3>

      <Line
        data={{
          labels: time,
          datasets: [
            {
              label: "Input (Vin)",
              data: inputWave,
              borderWidth: smallScreen ? 1.5 : largeScreen ? 3 : 2,
              borderColor: "#2563eb",
            },
            {
              label: "Output (Vout)",
              data: outputWave,
              borderWidth: smallScreen ? 1.5 : largeScreen ? 3 : 2,
              borderColor: "#f97316",
            },
          ],
        }}
        height={chartHeight}
        options={{
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              labels: {
                font: {
                  size: smallScreen ? 10 : largeScreen ? 16 : 12,
                },
              },
            },
          },

          scales: {
            x: {
              ticks: {
                maxTicksLimit: smallScreen ? 6 : 12,
                font: {
                  size: smallScreen ? 9 : largeScreen ? 14 : 12,
                },
              },
              title: {
                display: true,
                text: "Time (ms)",
                font: {
                  size: smallScreen ? 10 : largeScreen ? 16 : 12,
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: smallScreen ? 9 : largeScreen ? 14 : 12,
                },
              },
              title: {
                display: true,
                text: "Voltage (V)",
                font: {
                  size: smallScreen ? 10 : largeScreen ? 16 : 12,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default WaveformChart;


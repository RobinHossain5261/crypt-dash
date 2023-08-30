"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(79, 69, 182, 0.8)");
    gradient.addColorStop(1, "rgba(79, 69, 182, 0.1)");

    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, "rgba(100, 196, 247, 0.9)");
    gradient1.addColorStop(1, "rgba(100, 196, 247, 0.3)");

    const chartData = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [100, 200, 180, 270, 220, 256, 300, 280, 350, 330, 370, 430],
          fill: true,
          backgroundColor: "#0CAF60",
          borderColor: "green",
          borderWidth: 2,
          pointRadius: 7,
          pointBackgroundColor: "white",
        },
      ],
    };

    new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#F5F7FD",
            titleColor: "#2E293E",
            padding: 10,
            bodyColor: "#2E293E",
          },
        },
        scales: {
          y: {
            beginAtZero: true,

            ticks: {
              color: "#584E69",
              callback: function (value, index, values) {
                return value + "k";
              },
            },
          },
          x: {
            ticks: {
              color: "#584E69",
            },
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;

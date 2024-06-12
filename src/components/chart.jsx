/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartBar = ({ data }) => {
    const chartRef = useRef();
    const chartInstance = useRef(null);
    const { label, dataset } = data

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const chartData = {
            labels: label,
            datasets: dataset.map(({ nama, amount, color }) => {
                return {
                    label: nama,
                    data: amount,
                    backgroundColor: color,
                    borderRadius: 30,
                    barPercentage: 0.3
                }
            })
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false // Menyembunyikan gridlines pada sumbu y
                    }
                }
            }
        };

        const config = {
            type: 'bar',
            data: chartData,
            options: options
        };

        chartInstance.current = new Chart(ctx, config);

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return <canvas height={280} ref={chartRef} />;
};

export default ChartBar;
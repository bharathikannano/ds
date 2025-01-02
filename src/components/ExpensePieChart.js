import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './ExpensePieChart.scss';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpensePieChart = () => {
  const data = {
    labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ['#FC7900', '#396AFF', '#232323', '#343C6A'],
        borderColor: '#fff',
        borderWidth: 10,
        hoverBackgroundColor: ['#FC7900', '#396AFF', '#232323', '#343C6A'],
        hoverBorderColor: '#fff',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `  ${value}%`; // Add a space before the label to prevent overlap
          },
        },
        displayColors: true,
        bodyAlign: 'center',
        titleAlign: 'center',
      },
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}%`;
        },
        font: {
          size: 10,
          weight: 'bold',
        },
        align: 'center',
        anchor: 'center',
        offset: 5,
        padding: {
          top: 0,
          bottom: 0,
        },
        clip: false,
      },
    },
  };

  const chartContainerStyle = {
    width: '375px',
    height: '200px',
  };

  return (
    <div className='expense-statistics' style={chartContainerStyle}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpensePieChart;
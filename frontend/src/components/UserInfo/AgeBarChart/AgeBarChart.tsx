import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Age Distribution',
    },
  },
};

const labels = ['18-25', '26-35', '36-45', '46-55', '56+'];

const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 1000));
};

const data = {
  labels,
  datasets: [
    {
      label: 'Male',
      data: generateRandomData(),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Female',
      data: generateRandomData(),
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

export function AgeBarChart() {
  return <Bar height={300} options={options} data={data} />;
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import userService from '../../../services/userService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function AgeBarChart() {
  const [ages, setAge] = useState<string[]>([]);
  const [agesCount, setAgesCount] = useState<number[]>([]);

  useEffect(() => {
    const getAgesData = async () => {
      try {
        const { ages, counts } = await userService.getAges();
        setAge(ages);
        setAgesCount(counts as number[]);
      } catch (error) {
        console.error('Error fetching age data:', error);
      }
    };

    getAgesData();
  }, [ages]);

  const data = {
    labels: ages,
    datasets: [
      {
        label: 'Number of users',
        data: agesCount,
        backgroundColor: 'rgba(100, 144, 204, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 0,
    },
    plugins: {
      title: {
        display: true,
        text: 'Age Distribution',
      },
    },
  };

  return (
    <div>
      <Bar height={300} data={data} options={options} />
    </div>
  );
}

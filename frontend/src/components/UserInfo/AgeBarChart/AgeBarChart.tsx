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
import { Box, Slider } from '@mui/material';

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
  const [gap, setGap] = useState<number>(20);

  useEffect(() => {
    const getAgesData = async () => {
      try {
        const { ages, counts } = await userService.getAges(gap);
        setAge(ages);
        setAgesCount(counts as number[]);
      } catch (error) {
        console.error('Error fetching age data:', error);
      }
    };

    getAgesData();
  }, [gap]);

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

  function handleGap(event: React.ChangeEvent<HTMLInputElement>) {
    setGap(Number.parseInt(event.target.value));
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Bar height={300} data={data} options={options} />
      <Box alignItems='center' width={400}>
        <Slider
          onChange={(e: any) => handleGap(e)}
          aria-label='Temperature'
          defaultValue={20}
          valueLabelDisplay='auto'
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={40}
        />
      </Box>
    </div>
  );
}

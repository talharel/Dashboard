import { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import userService from '../../../services/userService';
import { Slider } from '@mui/material';
import './AgeBarChart.css';

export function AgeBarChart() {
  const [ages, setAge] = useState<string[]>([]);
  const [agesCount, setAgesCount] = useState<number[]>([]);
  const [gap, setGap] = useState<number>(20);
  const [chartWidth, setChartWidth] = useState<number>(700);

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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1700) {
        setChartWidth(1000);
      }
    };
    handleResize();
  });

  function handleGap(event: React.ChangeEvent<HTMLInputElement>) {
    setGap(Number.parseInt(event.target.value));
  }

  return (
    <div className='ages-chart'>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ages }]}
        series={[
          {
            data: agesCount,
            label: 'Number of users',
            color:'rgba(19, 49, 210, 0.4)'
          },
        ]}
        width={chartWidth}
        height={300}
      />
      <div className='slider'>
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
      </div>
    </div>
  );
}

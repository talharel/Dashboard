import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import userService from '../../../services/userService';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function GenderPieChart() {
  const [maleNumber, setMaleNumber] = useState(0);
  const [femaleNumber, setFemaleNumber] = useState(0);

  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [maleNumber, femaleNumber],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gender Ratio',
      },
    },
  };

  useEffect(() => {
    const getGenderData = async () => {
      try {
        const data = await userService.getGender();
        setMaleNumber(data.male);
        setFemaleNumber(data.female);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getGenderData();
    return () => {};
  }, []);

  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
}

export default GenderPieChart;

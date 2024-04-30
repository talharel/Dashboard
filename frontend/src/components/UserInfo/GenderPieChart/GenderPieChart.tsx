import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import userService from '../../../services/userService';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, Title);
const data = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      data: [60, 40],
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

function GenderPieChart() {
  useEffect(() => {
    const fetchNumberMaleFemale = async () => {
      try {
        await userService.getNumberMaleFemale();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNumberMaleFemale();
    return () => {};
  }, []);

  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
}

export default GenderPieChart;

import userService from '../../../services/userService';
import { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './GenderPieChart.css';

function GenderPieChart() {
  const [maleNumber, setMaleNumber] = useState(0);
  const [femaleNumber, setFemaleNumber] = useState(0);

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
      <div className='ratio-chart'>
        {/* <p className='ratio-chart-title'>Male Female Ratio Chart</p> */}
        <PieChart
  
          series={[
            {
              data: [
                { id: 0, value: maleNumber,color:'rgba(18, 171, 4, 0.4)', label: 'males' },
                { id: 1, value: femaleNumber,color:'rgba(195, 0, 221, 0.4)' ,label: 'females' },
              ],
            },
            
          ]}
          width={400}
          height={200}
      
        />
      </div>
    </>
  );
}

export default GenderPieChart;

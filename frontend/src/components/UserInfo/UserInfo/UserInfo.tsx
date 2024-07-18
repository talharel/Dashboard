import { AgeBarChart } from '../AgeBarChart/AgeBarChart';
import GenderPieChart from '../GenderPieChart/GenderPieChart';
import './UserInfo.css';

function UserInfo() {
  return (
    <>
      <div className='user-info'>
        <AgeBarChart />
        <GenderPieChart />
      </div>
    </>
  );
}

export default UserInfo;

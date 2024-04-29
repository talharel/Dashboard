import './DashTitle.css'
import { getDate } from '../../utils/utils';
const Title = () => {
    return (
        <div className='dashboard-header'>
            <div className='dashboard-header-title'>
                DASHBOARD
            </div>
            <h2 id='dashboard-header-date'>{getDate()}</h2>
        </div>

    );
}

export default Title;

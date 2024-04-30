import './DashboardHeader.css';
import { getDate } from '../../utils/utils';
import logo from '../../assets/images/logo.png';
import { Grid } from '@mui/material';

const DashboardHeader = () => {
  return (
    <Grid item xs={12}>
      <nav className='navbar'>
        <div className='navbar-content'>
          <div className='dashboard-header-title'>DASHBOARD</div>
          <h2 id='dashboard-header-date'>{getDate()}</h2>
        </div>
        <img className='logo' src={logo} alt='Logo' />
      </nav>
      <hr />
    </Grid>
  );
};

export default DashboardHeader;

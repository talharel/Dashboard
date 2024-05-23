import { Button, Card, Grid, Input, Typography } from '@mui/material';
import './UserInfo.css';
import { AgeBarChart } from '../AgeBarChart/AgeBarChart';
import GenderPieChart from '../GenderPieChart/GenderPieChart';

function UserInfo() {
  return (
    <>
      <Grid className='user-info' container>
        <Grid item xs={12}>
          <Typography variant='h4' className='user-info-title'>
            User Analytics
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ borderRadius: 2, width: 420 }} elevation={20}>
            <GenderPieChart />
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ borderRadius: 2, width: 420 }} elevation={20}>
            <AgeBarChart />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UserInfo;

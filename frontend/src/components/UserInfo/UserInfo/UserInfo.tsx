import { Card, Grid, Typography } from '@mui/material';
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
        <Grid item xl={3}>
          <Card
            sx={{ borderRadius: 2, width: 420, height: 460 }}
            elevation={20}
          >
            <GenderPieChart />
          </Card>
        </Grid>
        <Grid item xl={3}>
          <Card
            sx={{ borderRadius: 2, width: 420, height: 460 }}
            elevation={20}
          >
            <AgeBarChart />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UserInfo;

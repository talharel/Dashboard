import { Card, CardContent, Typography, Box } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import DoneIcon from '@mui/icons-material/Done';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AssignmentIcon from '@mui/icons-material/Assignment';

function MiniStatistic({ title, value }: { title: string; value: string }) {
  let iconComponent;
  let iconColor;

  switch (title) {
    case 'Employees':
      iconComponent = <GroupIcon fontSize='large' />;
      iconColor = '#1976d2';
      break;
    case 'Completed Tasks':
      iconComponent = <DoneIcon fontSize='large' />;
      iconColor = '#4caf50';
      break;
    case 'Uncompleted Tasks':
      iconComponent = <HighlightOffIcon fontSize='large' />;
      iconColor = '#f44336';
      break;
    case 'Total Tasks':
      iconComponent = <AssignmentIcon fontSize='large' />;
      iconColor = '#ff9800';
      break;
    default:
      iconComponent = null;
  }

  return (
    <Card sx={{ width: 220 }} variant='outlined' className='ministatistic'>
      <CardContent>
        <Box mt={2} display='flex' justifyContent='center'>
          <Box style={{ color: iconColor }}>{iconComponent}</Box>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Typography variant='h6' color='textSecondary' gutterBottom>
            {title}
          </Typography>
        </Box>
        <hr />

        <Box display='flex' alignItems='center' justifyContent='center'>
          <Typography variant='h5' component='div'>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MiniStatistic;

import { Box } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import DoneIcon from '@mui/icons-material/Done';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './MiniStatistic.css';

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
    <div className='ministatistic'>
      <Box mt={1} display='flex' justifyContent='center'>
        <Box style={{ color: iconColor }}>{iconComponent}</Box>
      </Box>
      <div className='ministatistic-title'>
        <p className='ministatistic-text'>{title}</p>
        <hr />
      </div>

      <div className='ministatistic-text'>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default MiniStatistic;

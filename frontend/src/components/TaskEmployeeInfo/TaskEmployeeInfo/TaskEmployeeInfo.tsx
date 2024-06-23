import { Grid, Typography } from '@mui/material';
import './TaskEmployeeInfo.css';
import MiniStatisticCard from '../MiniStatistic/MiniStatistic';
import { useEffect, useState } from 'react';
import employeeService from '../../../services/employeeService';
import taskService from '../../../services/taskService';

function TaskEmployeeInfo() {
  const [employeeSize, setEmployeeSize] = useState('');
  const [taskSize, setTaskSize] = useState('');
  const [completedTaskSize, setCompletedTaskSize] = useState('');
  const [unCompletedTaskSize, setUnCompletedTaskSize] = useState('');

  useEffect(() => {
    const getEmployeeData = async () => {
      try {
        const employeeSize = await employeeService.getEmployeesSize();
        setEmployeeSize(employeeSize);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getEmployeeData();
    return () => {};
  }, []);

  useEffect(() => {
    const getTasksData = async () => {
      try {
        const response = await taskService.getTasksSize();
        setTaskSize(response.count);
        setCompletedTaskSize(response.completed_tasks_size);
        setUnCompletedTaskSize(response.uncompleted_tasks_size);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getTasksData();
    return () => {};
  }, []);

  return (
    <>
      <Grid className='task-employee-info' container>
        <MiniStatisticCard title='Employees' value={employeeSize} />
        <MiniStatisticCard title='Completed Tasks' value={completedTaskSize} />
        <MiniStatisticCard
          title='Uncompleted Tasks'
          value={unCompletedTaskSize}
        />
        <MiniStatisticCard title='Total Tasks' value={taskSize} />
      </Grid>
    </>
  );
}

export default TaskEmployeeInfo;

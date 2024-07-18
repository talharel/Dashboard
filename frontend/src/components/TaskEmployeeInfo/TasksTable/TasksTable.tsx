import { useEffect, useState } from 'react';
import taskService from '../../../services/taskService';
import { TypeTask } from '../../../utils/types';
import './TasksTable.css';

function TasksTable() {
  const [tasks, setTasks] = useState<TypeTask[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getTasks();
        setTasks(data.tasks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='tasks-table-box'>
      <table className='tasks-table'>
        <thead>
          <tr>
            <th className='tasks-table-cell'>Title</th>
            <th className='tasks-table-cell'>Status</th>
            <th className='tasks-table-cell'>Creation Date</th>
            <th className='tasks-table-cell'>Contact Email</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className='tasks-cell'>{task.title}</td>
              <td className={task.status === 'complete' ? 'cell-complete' : 'cell-incomplete'}>{task.status}</td>
            
              <td className='tasks-cell'>
                {new Date(task.creation_date).toLocaleDateString()}
              </td>
              <td className='tasks-cell'>
                {task.employees.length > 0
                  ? task.employees[0].email
                  : 'No employees assigned'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasksTable;

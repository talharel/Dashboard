import Sidebar from '../Sidebar/Sidebar';
import TaskEmployeeInfo from '../TaskEmployeeInfo/TaskEmployeeInfo/TaskEmployeeInfo';
import TasksTable from '../TaskEmployeeInfo/TasksTable/TasksTable';
import UserInfo from '../UserInfo/UserInfo/UserInfo';


function Dashboard() {
  return (
    <>
      <TaskEmployeeInfo />
      <TasksTable />
      <UserInfo />
      <Sidebar />
    </>
  );
}

export default Dashboard;

// Grid

// xs (extra small): This applies to screens that are up to 600px wide. It's the default size if no other sizes are specified.
// sm (small): This applies to screens that are between 600px and 960px wide.
// md (medium): This applies to screens that are between 960px and 1280px wide.
// lg (large): This applies to screens that are between 1280px and 1920px wide.
// xl (extra large): This applies to screens that are greater than or equal to 1920px wide.

// |-------------------------------------|    // Grid Container (12 columns)

// |---|---|---|-------------------------|    // Grid Items (4 columns, 4 columns, 4 columns)

// |---|-------|-------------------------|    // Grid Items (4 columns, 8 columns)

// |-------|---|-------------------------|    // Grid Items (8 columns, 4 columns)

// |-------|-------|---------------------|    // Grid Items (8 columns, 8 columns)

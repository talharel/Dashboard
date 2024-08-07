import './Sidebar.css';
import logo from '../../assets/images/logo.png';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <img className='logo' src={logo} alt='Logo' />

        <div className='sidebar-buttons'>
          <button>Code</button>
          <button>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

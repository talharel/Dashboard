import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import TaskEmployeeInfo from '../TaskEmployeeInfo/TaskEmployeeInfo/TaskEmployeeInfo';
import TasksTable from '../TaskEmployeeInfo/TasksTable/TasksTable';
import UserInfo from '../UserInfo/UserInfo/UserInfo';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='sidebar-col' xs={12} md={2}>
          <Sidebar />
        </Col>

        <Col xs={12} md={10}>
          <Row>
            <Col xs={12}>
              <TaskEmployeeInfo />
            </Col>
          </Row>

          <Row>
            <Col>
              <TasksTable />
            </Col>
          </Row>

          <Row >
            <Col>
              <UserInfo />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

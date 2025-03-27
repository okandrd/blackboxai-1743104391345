import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <span className="text-white">{user?.email}</span>
            </Navbar.Text>
            <Button 
              variant="outline-light" 
              className="ms-3" 
              onClick={logout}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1>Dashboard</h1>
        <div className="mt-4 p-5 bg-light rounded">
          <h2>Welcome to the Admin Panel</h2>
          <p>You have successfully authenticated and can now access all admin features.</p>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
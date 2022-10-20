import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.warn('User logged out');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-4 py-3"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              {user?.uid ? (
                <>
                  <Button onClick={handleLogOut} variant="light">
                    Log Out
                  </Button>
                  <span> {user?.displayName}</span> &nbsp;
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="success">Login</Button>
                  </Link>
                  &nbsp;
                  <Link to="/register">
                    <Button variant="info">Register</Button>
                  </Link>
                </>
              )}
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  roundedCircle
                  src={user?.photoURL}
                  style={{ height: '30px' }}
                ></Image>
              ) : (
                <FaUserCircle size={32} />
              )}
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Container>
          <Row>
            <Col lg={2} className="d-none d-lg-block">
              <LeftSideNav></LeftSideNav>
            </Col>
            <Col lg={7}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightSideNav></RightSideNav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container text-center">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;

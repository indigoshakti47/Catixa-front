
import React from "react";

// reactstrap components
import {  Row, Col, Nav,  NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              
                <NavLink
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Catixa
                </NavLink>
             
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;

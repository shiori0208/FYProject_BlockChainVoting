import React from "react";
import {
  Container,Table,Navbar,
  FooterLink,
  Heading,
} from "react-bootstrap";
  
const Footer = (props) => {
  return (
  <Navbar collapseOnSelect='true' expand="lg" bg="dark" variant="dark" fixed="bottom">
        <Container>
          <h1 style={{ color: "darkorange"}}>Voter Anonymous</h1>
          <h6 style={{ color: "darksalmon"}}>CSE Final Year Project group 38</h6>
        </Container>
      </Navbar>
  );
};
export default Footer;
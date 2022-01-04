import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {  BrowserRouter as Router,  Routes,  Route,  Link, useLocation} from "react-router-dom";
import Home from './Components/Home';
import NewPoll from './Components/NewPoll';
import PollingStation from './Components/PollingStation';

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  return  (  
<Router>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">A Poll Page</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto"></Nav>
    <Nav>
      <Nav.Link href='/NewPoll'>New Poll</Nav.Link>
      <Nav.Link onClick={window.accountId===''?login:logout}>
      {window.accountId===''?"Login":window.accountId}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/PollingStation" element={<PollingStation />} />
    <Route exact path="/NewPoll" element={<NewPoll />} />
  </Routes>
</Router>
);
}
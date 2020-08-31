import React from 'react';
import {BrowserRouter as Router,
    Switch,Route,Link} from "../../../node_modules/react-router-dom";

import App from '../../App';
import EnrolledCourse from '../../components/EnrolledCourse/EnrolledCourse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    const brandStyle = {color: '#fff',textDecoration: 'none'}
    return (
        <Router>
            <div className="head-menu">
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand><Link to="/" style={brandStyle}>Seracourse</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/Course">Course</Link></Nav.Link>
                        <Nav.Link><Link to="/EnrolledCourse">Enrolled Course</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <App></App>
                    </Route>
                    <Route path="/Course">
                        <App></App>
                    </Route>
                    <Route path="/EnrolledCourse">
                        <EnrolledCourse></EnrolledCourse>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Header;
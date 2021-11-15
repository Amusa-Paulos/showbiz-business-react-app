import React from 'react'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap'
import { Link } from "react-router-dom";

export default function Header (props) {
    
    return (
        <div>
            <Navbar color="dark" dark expand="md"  full={true} className="shadow">
                <Link to="/" className="navbar-brand" color="text" style={{fontWeight: 'bold', textDecoration: 'none'}}>
                    ShowBiz
                </Link>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link" color="text" style={{textDecoration: 'none'}}>
                            Record Label
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/magazine/" className="nav-link" color="text" style={{textDecoration: 'none'}}>
                            Magazine
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/movies/" className="nav-link" color="text" style={{textDecoration: 'none'}}>
                            Movies
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/talents-management/" className="nav-link" color="text"
                         style={{textDecoration: 'none'}}>
                            Talent/Artists Management
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/media-production/" className="nav-link" color="text"
                         style={{textDecoration: 'none'}}>
                            Media Productions
                        </Link>
                    </NavItem>
                    
                    
                </Nav>
                
                </Collapse>
            </Navbar>
            </div>
    )
}
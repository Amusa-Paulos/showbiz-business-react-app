import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { BsFillHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Container fluid className="bg-dark shadow p-3">
            <Row className="d-flex justify-content-between">
                <Col sm="12" md="4">
                
                <ul className="list-unstyled text-muted">
                    <Link to="/" className="nav-link" color="text"
                        style={{textDecoration: 'none'}}>
                        Record Label
                    </Link>
                    <Link to="/magazine/" className="nav-link" color="text"
                        style={{textDecoration: 'none'}}>
                        Magazine
                    </Link>
                    <Link to="/movies/" className="nav-link" color="text"
                        style={{textDecoration: 'none'}}>
                        Movies
                    </Link>
                    <Link to="/talents-management/" className="nav-link" color="text"
                        style={{textDecoration: 'none'}}>
                        Talent/Artists Management
                    </Link>
                    <Link to="/media-production/" className="nav-link" color="text"
                        style={{textDecoration: 'none'}}>
                        Media Productions
                    </Link>
                </ul>
                </Col>
                <Col sm="12" md="4" className="d-flex align-items-center">
                    <div>
                        <div className="text-muted">&copy; Copyright {new Date().getFullYear()} ShowBiz </div>
                        <div className="text-muted">
                            This Website was created with <BsFillHeartFill color="primary" size={20} /> by Amusa Abayomi(Paulos Ab)
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}
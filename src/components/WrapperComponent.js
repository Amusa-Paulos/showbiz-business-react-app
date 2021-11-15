import React from 'react'
import { Container } from 'reactstrap'
import Header from './layouts/Header'
import { Routes, Route, } from "react-router-dom";
import RecordLabel from './pages/RecordLabel';
import Magazine from './pages/MagazinePage';
import Movies from './pages/MoviesPage';
import Talents from './pages/TalentPage';
import MediaProduction from './pages/MediaProductionPage';
import Footer from './layouts/Footer';

export default function WrapperComponent (props) {
    return (
        <Container className="bg-dark p-0" style={{minHeight:'100vh',}} fluid>
            <Header />
            <Routes>
                <Route path="/" exact element={<RecordLabel />} />
            </Routes>
            <Routes>
                <Route path="/magazine/" element={<Magazine />} />
            </Routes>
            <Routes>
                <Route path="/movies/" element={<Movies />} />
            </Routes>
            <Routes>
                <Route path="/talents-management/" element={<Talents />} />
            </Routes>
            <Routes>
                <Route path="/media-production/" element={<MediaProduction />} />
            </Routes>
            <Footer />
        </Container>
    )
}
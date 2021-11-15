import React from 'react';
import { Col, Container, Button, Row} from 'reactstrap'


export default function MediaProduction(props) {
    return (
        <Container fluid style={{minHeight: '100vh'}} className="bg-dark py-4 px-4">
            <h4 className="text-white">Documentaries</h4>
            <Row>
                <Col xs="12" className="documentaries-video"  style={{height: '75vh'}}>
                    <div className="floating-subscribe-btn">
                        <Button color="danger" size="lg" style={{borderRadius: 10}}>
                            <div>Subscribe </div>
                            <div style={{fontSize: 10}}>to Download</div>
                        </Button>
                    </div>
                </Col>
            </Row>

            <h4 className="text-white mt-5">Film Production</h4>
            <Row className="mt-4">
                <Col sm="12" md="3" className="film-production-image">
                    <img src={require('../../media/media-production/film-production.jpg').default}
                        alt="film-production" className="img-fluid" style={{width: '100%'}}
                    />
                </Col>
                <Col sm="12" md="9" className="text-white">
                    <h5 className="text-white">How do we produce our films</h5>
                    Film Production is created in 5 phases: development, pre-production, production, 
                    post-production, and distribution. Each phase has a different purpose, with the overarching 
                    goal to get to the next one, and ultimately on to distribution. 
                    Each stage varies in length, and different roles suit different stages.
                    <br />
                    <br />
                    Film Production is created in 5 phases: development, pre-production, production, 
                    post-production, and distribution. Each phase has a different purpose, with the overarching 
                    goal to get to the next one, and ultimately on to distribution. 
                    Each stage varies in length, and different roles suit different stages.
                    <br />
                    <br />
                    Film Production is created in 5 phases: development, pre-production, production, 
                    post-production, and distribution. Each phase has a different purpose, with the overarching 
                    goal to get to the next one, and ultimately on to distribution. 
                    Each stage varies in length, and different roles suit different stages.
                </Col>
            </Row>

            <h4 className="text-white mt-5">Event Coverage</h4>
            <Row className="mt-4">
                <Col sm="12" md="3" className="event-coverage-image order-md-last">
                <img src={require('../../media/media-production/Event-coverage.png').default}
                        alt="film-production" className="img-fluid" style={{width: '100%'}}
                    />
                </Col>
                <Col sm="12" md="9" className="text-white">
                    <h5 className="text-white">How do we cover events</h5>
                    From conferences to concerts, live event coverage is becoming an integral part of 
                    most brands’ ability to grow their social footprint and share with their audiences 
                    in a relevant way. Covering an event humanizes your brand and allows them to see you 
                    care about the event just as much as they do.
                    <br />
                    <br />
                    In an age where consumers are choosing like-minded brands, live event coverage can 
                    drive business, brand loyalty and trust. Your strong social presence during an event can 
                    increase customer service for those attending, allow your brand to monitor risk and 
                    mitigate issues that may arise, curate updates to event information and more.
                    <br />
                    <br />
                    With event coverage, it’s all about the details. Consistent use of hashtags, 
                    intriguing behind-the-scenes visuals, engaging with the artist or event partners, 
                    showcasing exclusive action your followers might not have an opportunity to see…the 
                    list goes on and on. Additionally, real-time engagement 
                    with your audience puts your brand in the same space as them, cultivating a peer-to-peer 
                    relationship.
                </Col>
            </Row>

            <h4 className="text-white mt-5">Music Videos</h4>
            <Row className="mt-4">
                <Col sm="12" md="3" className="music-videos-image">
                <img src={require('../../media/media-production/music-videos.jpg').default}
                        alt="film-production" className="img-fluid" style={{width: '100%'}}
                    />
                </Col>
                <Col sm="12" md="9" className="text-white">
                    <h5 className="text-white">How do we make music videos</h5>
                    From conferences to concerts, live event coverage is becoming an integral part of 
                    most brands’ ability to grow their social footprint and share with their audiences 
                    in a relevant way. Covering an event humanizes your brand and allows them to see you 
                    care about the event just as much as they do.
                    <br />
                    <br />
                    In an age where consumers are choosing like-minded brands, live event coverage can 
                    drive business, brand loyalty and trust. Your strong social presence during an event can 
                    increase customer service for those attending, allow your brand to monitor risk and 
                    mitigate issues that may arise, curate updates to event information and more.
                    <br />
                    <br />
                    With event coverage, it’s all about the details. Consistent use of hashtags, 
                    intriguing behind-the-scenes visuals, engaging with the artist or event partners, 
                    showcasing exclusive action your followers might not have an opportunity to see…the 
                    list goes on and on. Additionally, real-time engagement 
                    with your audience puts your brand in the same space as them, cultivating a peer-to-peer 
                    relationship.
                </Col>
            </Row>

            <h4 className="text-white mt-5">TV Comercials</h4>
            <Row className="mt-4">
                <Col sm="12" md="3" className="tv-commercial-image order-md-last">
                    <img src={require('../../media/media-production/tv-commercial.jpg').default}
                            alt="film-production" className="img-fluid" style={{width: '100%'}}
                    />
                </Col>
                <Col sm="12" md="9" className="text-white">
                    <h5 className="text-white">Understand our TV Commercials</h5>
                    A television advertisement (also called a television commercial, commercial, advert, 
                    TV advert or simply an ad) is a span of television programming produced and paid for by an organization. 
                    It conveys a message promoting, and aiming to market, a product or service.
                    <br />
                    <br />
                    In an age where consumers are choosing like-minded brands, live event coverage can 
                    drive business, brand loyalty and trust. Your strong social presence during an event can 
                    increase customer service for those attending, allow your brand to monitor risk and 
                    mitigate issues that may arise, curate updates to event information and more.
                    <br />
                    <br />
                    With event coverage, it’s all about the details. Consistent use of hashtags, 
                    intriguing behind-the-scenes visuals, engaging with the artist or event partners, 
                    showcasing exclusive action your followers might not have an opportunity to see…the 
                    list goes on and on. Additionally, real-time engagement 
                    with your audience puts your brand in the same space as them, cultivating a peer-to-peer 
                    relationship.
                </Col>
            </Row>

            <h4 className="text-white mt-5">Audio Recording Production</h4>
            <Row className="mt-4">
                <Col sm="12" md="3" className="audio-recording">
                <img src={require('../../media/media-production/audio-recording.jpg').default}
                            alt="film-production" className="img-fluid" style={{width: '100%'}}
                    />
                </Col>
                <Col sm="12" md="9" className="text-white">
                    <h5 className="text-white">How do we produce audio recording</h5>
                    A television advertisement (also called a television commercial, commercial, advert, 
                    TV advert or simply an ad) is a span of television programming produced and paid for by an organization. 
                    It conveys a message promoting, and aiming to market, a product or service.
                    <br />
                    <br />
                    In an age where consumers are choosing like-minded brands, live event coverage can 
                    drive business, brand loyalty and trust. Your strong social presence during an event can 
                    increase customer service for those attending, allow your brand to monitor risk and 
                    mitigate issues that may arise, curate updates to event information and more.
                    <br />
                    <br />
                    With event coverage, it’s all about the details. Consistent use of hashtags, 
                    intriguing behind-the-scenes visuals, engaging with the artist or event partners, 
                    showcasing exclusive action your followers might not have an opportunity to see…the 
                    list goes on and on. Additionally, real-time engagement 
                    with your audience puts your brand in the same space as them, cultivating a peer-to-peer 
                    relationship.
                </Col>
            </Row>
        </Container>
    )
}
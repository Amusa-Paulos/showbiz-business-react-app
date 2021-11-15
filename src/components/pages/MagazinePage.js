import React from 'react';
import { Col, Container, Button, Card, CardBody, CardImg, 
    CardSubtitle, CardText, CardTitle, Form, FormFeedback, FormGroup, 
    FormText, Input, Label, Row, CardGroup } from 'reactstrap'

const CardContainerMaker = ({image, title, date, description, type}) => {
    return (
        <Card inverse color="dark" className="shadow mb-3 album-card">
            <CardImg alt="music" src={image} top
                width="100%"/>
            <CardBody>
                <div className="w-100 d-flex justify-content-end">
                    <small className="text-muted">{type}</small>
                </div>
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {date}
                </CardSubtitle>
                <CardText>
                    {description}
                    
                </CardText>
            </CardBody>
        </Card>
    )
}
export default function Magazine (props) {
    return (
        <Container fluid style={{minHeight: '100vh'}} className="bg-dark py-4 px-0">
            <h1 className="text-white mb-3 px-5">TOPICS</h1>
            <CardGroup>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/celeb1.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Music"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/tech1.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Technology"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/celeb2.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Music"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/celeb3.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Music"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/tech2.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Technology"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/celeb4.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Music"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/tech3.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Technology"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/tech4.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Technology"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/celeb5.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Music"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/celeb6.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Movie"
                    />
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <CardContainerMaker 
                        image={require('../../media/magazine page/tech5.jpg').default}
                        title="A cool title" 
                        date="Nov 29, 2022" 
                        description="This is a very cool description and it is purposed to be long,
                        This content is a little bit longer." 
                        type="Technology"
                    />
                </Col>
            </CardGroup>

            <Row className="w-100">
                <h1 className="text-white mb-3 mt-4 px-5">
                    SUBSCRIPTIONS <sub className="text-danger" style={{fontSize: '30%'}}>exclusive</sub>
                </h1>
                <CardGroup>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/tech6.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Technology"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/space1.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Space"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/tech7.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Technology"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/tech8.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Technology"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/space2.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Space"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/space3.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Space"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/tech9.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Technology"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/space4.jpeg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Space"
                        />
                    </Col>
                    <Col sm="12" md="3" className="m-auto">
                        <CardContainerMaker 
                            image={require('../../media/magazine page/space5.jpg').default}
                            title="A cool title" 
                            date="Nov 29, 2022" 
                            description="This is a very cool description and it is purposed to be long,
                            This content is a little bit longer." 
                            type="Space"
                        />
                    </Col>
            </CardGroup>
            </Row>

            <Row className="w-100 px-4">
                <h1 className="text-white mb-3 mt-4 px-5">
                    Online and Print
                </h1>
                <Col sm="12" md="3" className="m-auto">
                    <Card color="secondary" className="shadow" style={{borderRadius: 10}} inverse>
                        <CardBody>
                        <CardTitle tag="h5">
                            Print Publication
                        </CardTitle>
                        <CardText>
                            You can print all your magazines here.
                        </CardText>
                        <Button outline color="warning" className="px-4">
                            Print
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="3" className="m-auto">
                    <Card color="secondary" className="shadow" style={{borderRadius: 10}} inverse>
                        <CardBody>
                        <CardTitle tag="h5">
                            View Online Publication
                        </CardTitle>
                        <CardText>
                            View all your posted publications and your subscriptions here.
                        </CardText>
                        <Button outline color="light" className="px-4">
                            View
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
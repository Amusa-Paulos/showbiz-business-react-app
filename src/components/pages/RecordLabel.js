import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap'


const RecordAlbumContainerMaker = ({image, artistName, date, description}) => {
    return (
        <Card inverse color="dark" className="shadow mb-3 album-card">
            <CardImg alt="music" src={image} top
                width="100%"/>
            <CardBody>
                <CardTitle tag="h5">
                    {artistName}
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

export default function RecordLabel (props) {
    const [numberOfTickets, setNumberOfTickets] = React.useState(1);
    

    const handleFormSubmittion = (e) => {
        e.preventDefault();
        let inputValues = e.nativeEvent.target.elements
        let formValues =  []
        for (let i = 0; i < inputValues.length - 1; i++) {
            const el = inputValues[i];
            formValues.push(el.name + ": " + el.value)
        }
        alert("Thanks for your interest! Values: \n" + formValues.join('\n'));
        // props.history.push('/record-album');
    }
    return (
        <Container fluid style={{minHeight: '100vh'}} className="bg-dark py-4">
            <Row>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                    image={require("../../media/nicki-minaj.jpg").default}
                    artistName="Nicki Minaj" 
                    date="December 31, 2022" 
                    description="Live concert at the White House in Washington, D.C. with the band of the same name."/>
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                    image={require("../../media/chris-brown.jpg").default}
                    artistName="Chris Brown"
                    date="Jan 01, 2022"
                    description="Live concert in South America with the band of the same name."
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/lecrae.jpg").default}
                        artistName="Lecrae"
                        date="Jan 03, 2022"
                        description="Live concert in Nigeria with the band of the same name."
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/lil-wayne.jpg").default}
                        artistName="Lil Wayne"
                        date="Jan 13, 2022"
                        description="Releasing a new album in the US."
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/drake.jpg").default}
                        artistName="Drake"
                        date="Jan 15, 2022"
                        description="Playing a new album in the US."
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/don-moen.jpg").default}
                        artistName="Don Moen"
                        date="Jan 18, 2022"
                        description="Live concert in Michigan"
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/kendrick-lamar.jpg").default}
                        artistName="Kendrick Lamar"
                        date="Jan 20, 2022"
                        description="Live album concert in South US"
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/eminem.jpg").default}
                        artistName="Eminem"
                        date="Jan 25, 2022"
                        description="Live album concert in Canada"
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/jay-z.jpg").default}
                        artistName="Jay Z"
                        date="Jan 28, 2022"
                        description="Live album concert in China"
                    />
                </Col>
                <Col sm="12" md="4" lg="3">
                    <RecordAlbumContainerMaker 
                        image={require("../../media/cardi-b.jpg").default}
                        artistName="Cardi B"
                        date="Jan 30, 2022"
                        description="New album live concert"
                    />
                </Col>
            </Row>


            <Row className="mt-3">
                <div>
                    <h1 className="text-muted text-center">Booking</h1>
                    <hr className="border border-secondary" />
                </div>
                <Col sm="12" md="10" lg="8" className="p-4 m-auto booking-container">
                <Form onSubmit={handleFormSubmittion}>
                    <FormGroup>
                        <Label for="exampleEmail" className="text-muted">
                            Full name
                        </Label>
                        <Input 
                            className="bg-dark text-white" 
                            placeholder="full name please!" 
                            name="fullname"
                        />
                        <FormFeedback>
                            validation text
                        </FormFeedback>
                        <FormText>
                            make sure to enter your real name
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" className="text-muted">
                            Email Address
                        </Label>
                        <Input 
                            className="bg-dark text-white" 
                            type="email" 
                            placeholder="youremail@example.com" 
                            name="email"
                        />
                        <FormFeedback>
                            validation text
                        </FormFeedback>
                        <FormText>
                            enter a correct and valid email address, we will be sending the ticket to the 
                            provided email address
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" className="text-muted">
                            Phone number
                        </Label>
                        <Input 
                            className="bg-dark text-white" 
                            type="tel" 
                            placeholder="234 901 234 5678" 
                            name="phone"
                        />
                        <FormFeedback>
                            validation text
                        </FormFeedback>
                        <FormText>
                            enter a correct and valid phone number that we may you to contact you
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" className="text-muted">
                            Number of tickets
                        </Label>
                        <Input 
                            className="bg-dark text-white" 
                            type="number" 
                            placeholder="how many tickets?" 
                            name="numberOfTickets"
                            value={numberOfTickets}
                            onChange={(e) => setNumberOfTickets(e.target.value < 1 ? 1 : e.target.value)}
                        />
                        <FormFeedback>
                            validation text
                        </FormFeedback>
                        <FormText>
                            provide the number of tickets you would like to purchase
                        </FormText>
                    </FormGroup>
                    <div className="d-flex justify-content-end">
                        <Button outline color="light" className="px-4">Book</Button>
                    </div>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}
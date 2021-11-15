import React from 'react';
import { Col, Container, Button, Card, CardBody, CardTitle, Form, FormFeedback, FormGroup, 
    FormText, Input, Label, Row } from 'reactstrap'


const CardGenerator = ({items}) => {
    return (
        <>
        {
            items.map((item, index) => {
                return (
                    <Col sm="12" md="3" key={index} className="mx-auto mb-3">
                        <Card color="dark" className="shadow talents-card" style={{borderRadius: 10}} inverse>
                            <CardBody style={{display: 'flex', position: 'relative'}} className="p-0">
                                <img src={item.image} alt="profiles"
                                    style={{width: '100%', borderRadius: '10px'}} />
                                <CardTitle tag="h5" className="talents-card-title p-3">
                                    {item.name}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        }
            
        </>
    )
}
export default function Talents(props) {
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
        <Container fluid style={{minHeight: '100vh'}} className="bg-dark py-4 px-4">
            <h1 className="text-white text-center mt-4 mb-3">Profiles</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
            </Row>
            <h1 className="text-white text-center mt-4 mb-3">Music Artists</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
            </Row>
            <h1 className="text-white text-center mt-4 mb-3">Actors</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
            </Row>
            <h1 className="text-white text-center mt-4 mb-3">Actresses</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
            </Row>
            <h1 className="text-white text-center mt-4 mb-3">Comedians</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
            </Row>
            <h1 className="text-white text-center mt-4 mb-3">DJs</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
            </Row>
            <h1 className="text-white text-center mt-4 mb-3">MCs</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
            </Row>
            <h1 className="text-white text-center mt-4 mb-3">Dancers</h1>
            <Row>
                <CardGenerator 
                    items={[
                        {name: 'Nicki Minaj', image: require('../../media/nicki-minaj.jpg').default},
                        {name: 'Drake', image: require('../../media/drake.jpg').default},
                        {name: 'Lil Wayne', image: require('../../media/lil-wayne.jpg').default},
                        {name: 'Kendrick Lamar', image: require('../../media/kendrick-lamar.jpg').default},
                        {name: 'Jay Z', image: require('../../media/jay-z.jpg').default},
                        {name: 'Eminem', image: require('../../media/eminem.jpg').default},
                        {name: 'Don Moen', image: require('../../media/don-moen.jpg').default},
                        {name: 'Chris Brown', image: require('../../media/chris-brown.jpg').default},
                        {name: 'Cardi B', image: require('../../media/cardi-b.jpg').default},
                        {name: 'Lecrae', image: require('../../media/lecrae.jpg').default},
                    ]}
                />
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
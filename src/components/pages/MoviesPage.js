import React from 'react';
import { Col, Container, Button, Card, CardBody, CardImg, 
    CardSubtitle, CardText, CardTitle, Row } from 'reactstrap'
import { FaPlay } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';


const CardContainerMaker = ({image, title, maker, star}) => {
    return (
        <Card inverse color="dark" className="border-0 mb-3">
            <div className="img-container">
            <CardImg alt="music" src={image} top
                width="100%" style={{overflow: 'hidden'}} />
            </div>
            <CardBody>
                <CardTitle tag="h5" className="mt-5">
                    {title}
                </CardTitle>
                <CardSubtitle className="my-4 text-muted" tag="h6">
                    {maker}
                </CardSubtitle>
                <CardText className="my-4">
                    {star}
                    
                </CardText>
            </CardBody>
        </Card>
    )
}
export default function Movies() {
    return (
        <Container fluid style={{minHeight: '100vh'}} className="bg-dark py-4 px-4">
            <h1 className="text-white">Movies</h1>
            <Row>
                <Col sm="12" className="bg-secondary top-movie mb-4" style={{height: '75vh'}}>
                    <div className="floating-play-btn">
                        <FaPlay size={30} color="white" />
                    </div>
                </Col>

                <div className="mt-3 mb-1 d-flex justify-content-between">
                    <div className="text-white h3">African movies</div>
                    <div className="text-primary">
                        <a href="##" style={{textDecoration: 'none'}}>See all</a>
                    </div>
                </div>
                
                <Col xs="12" style={{height: 'auto'}} className="py-2">
                    <Swiper
                    direction="horizontal"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper-container"
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1020: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    >
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/loki.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/ladyloki1.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/The-Infinity-Saga.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                    </Swiper>
                </Col>


                <div className="mt-3 mb-1 d-flex justify-content-between">
                    <div className="text-white h3">Documentaries</div>
                    <div className="text-primary">
                        <a href="##" style={{textDecoration: 'none'}}>See all</a>
                    </div>
                </div>
                
                <Col xs="12" style={{height: 'auto'}} className="py-2">
                    <Swiper
                    direction="horizontal"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper-container"
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1020: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    >
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/loki.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/ladyloki1.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/The-Infinity-Saga.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                    </Swiper>
                </Col>


                <div className="mt-3 mb-1 d-flex justify-content-between">
                    <div className="text-white h3">Success Stories</div>
                    <div className="text-primary">
                        <a href="##" style={{textDecoration: 'none'}}>See all</a>
                    </div>
                </div>
                
                <Col xs="12" style={{height: 'auto'}} className="py-2">
                    <Swiper
                    direction="horizontal"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper-container"
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1020: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    >
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/loki.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/ladyloki1.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/The-Infinity-Saga.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                    </Swiper>
                </Col>


                <div className="mt-3 mb-1 d-flex justify-content-between">
                    <div className="text-white h3">Audition (TV)</div>
                    <div className="text-primary">
                        <a href="##" style={{textDecoration: 'none'}}>See all</a>
                    </div>
                </div>
                
                <Col xs="12" style={{height: 'auto'}} className="py-2">
                    <Swiper
                    direction="horizontal"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper-container"
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1020: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    >
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/loki.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/ladyloki1.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/The-Infinity-Saga.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/captain-marvel.jpg').default}
                                title="Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                        <SwiperSlide className="text-white movies-swiper-slide">
                            <CardContainerMaker image={require('../../media/movies/avengers-infinity-war.jpg').default}
                                title="Lady Loki" maker="Marvel Studios" 
                                star={4} />
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>

            <Row className="mt-4">
                <div className="text-white h1">Subscription</div>
                <Col sm="12" md="3" className="m-auto">
                    <Card color="dark" className="shadow" style={{borderRadius: 10}} inverse>
                        <CardBody>
                        <CardTitle tag="h5">
                            Subscribe
                        </CardTitle>
                        <CardText>
                            Your monthly subscription is due on the 1st of every month.
                        </CardText>
                        <Button color="primary" className="px-4">
                            Subscribe
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
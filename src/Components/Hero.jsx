import React from "react";
import Videobg from "../Assests/Videobg.mp4";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";

// import Button from 'react-bootstrap/Button';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import img from "../Assests/about-1-1.jpg";
import img2 from "../Assests/services-1-1.jpg";
import img3 from "../Assests/services-1-2.jpg";
import img4 from "../Assests/services-1-3.jpg";
import img5 from "../Assests/testimonial-1-1.jpg";
import img7 from "../Assests/quote-png.png";
import imgs1 from "../Assests/lapy1.png";
import imgs3 from "../Assests/lapy3.png";

import CountUp from "react-countup";
import New from "./New";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="main">
        <video src={Videobg} autoPlay loop muted />

        <div className="content">
          <h2>We Provide Best Digital Gadgets Services</h2>

          {/* <Button variant="outline-light">Contact Now</Button> */}
        </div>
      </div>

      <div className="main-item">
        <Container>
          <Row className="pt-5 ">
            <Col className="p-4 mt-5" md={5} lg={5} sm={12}>
              <h6>HIGHLIGHT ITEM</h6>

              <h1 className="mt-3">Discover Our Selected Items</h1>
              <span className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </span>
              <div className="mt-3 icon-tick">
                <h6>
                  <i class="fa-solid fa-circle-check"></i>Most liked
                </h6>
                <h6>
                  <i class="fa-solid fa-circle-check"></i>Trending on the week
                </h6>
                <h6>
                  <i class="fa-solid fa-circle-check"></i>High quality{" "}
                </h6>
              </div>
              <Button className="mt-5 p-2" variant="dark">
                Contact Now{" "}
              </Button>
            </Col>

            <Col md={7} lg={7} sm={12}>
              <Container className="boxx p-3 mb-3">
                <Row>
                  <Col md={6} lg={6} sm={6}>
                    <Card className="sm-cards pb-3">
                      <img src={imgs1} alt="" />
                      <h5 className="text-center">Galaxy Book4 Pro</h5>
                      <h5 className="rupe-icon text-center">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1,39,990
                      </h5>

                      <div className="mt-4 text-center btnss">
                        <button type="button" class="btn btn-dark">
                          View Product
                        </button>
                      </div>
                    </Card>
                  </Col>

                  <Col md={6} lg={6} sm={6}>
                    <Card className="sm-cards pb-3">
                      <img src={imgs3} alt="" />
                      <h5 className="text-center">Hp Victus</h5>
                      <h5 className="rupe-icon text-center">
                        <i class="fa-solid fa-indian-rupee-sign"></i>72,999
                      </h5>
                      <div className="mt-4 text-center btnss">
                        <button type="button" class="btn btn-dark">
                          View Product
                        </button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="service bg-black">
        <Container>
          <span className="pt-5 fs-4">About Experience </span>
          <hr className="w-25 mx-auto text-white" />
          <h2 className="mt-5 text-center justify-content-center">
            We Have More Than 20 Years Experience in Gadget
            <br />
            Smartphone & Laptop Repair Services{" "}
          </h2>
          <Row className="mt-5">
            <Col className="mb-5 pb-5" md={4} lg={4} sm={12}>
              <Card className="bg-dark">
                <Card.Body className="card-text">
                  <h5 className="mt-3"> Quality Services </h5>
                  <p className="mt-3">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="mb-5 pb-5" md={4} lg={4} sm={12}>
              <Card className="bg-dark">
                <Card.Body className="card-text">
                  <h5 className="mt-3"> Professional Team </h5>
                  <p className="mt-3">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="mb-5 pb-5" md={4} lg={4} sm={12}>
              <Card className="bg-dark">
                <Card.Body className="card-text">
                  <h5 className="mt-3"> 24 Hour Support </h5>
                  <p className="mt-3">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="choose-us">
        <p className="pt-5 fs-4 "> Why Choose Us </p>

        <h1 className="mt-5">Gadget Repair For Everyone</h1>
        <p className="text-center justify-content-center">
          Duis aute irure dolor in repreh enderit in volup tate velit esse
          cillum dolore <br />
          eu fugiat nulla dolor atur with Lorem ipsum is simply
        </p>

        <Container className="mt-5">
          <Row>
            <Col md={6} lg={6} sm={12}>
              <Card className="p-3 mb-5 bg-dark text-white">
                <h3 className="mb-3">Warranty Service</h3>
                <span className="fs-5">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore eu fugiat
                </span>
              </Card>
            </Col>

            <Col md={6} lg={6} sm={12}>
              <Card className="p-3 mb-5 bg-dark text-white">
                <h3 className="mb-3">Customer Service</h3>
                <span className="fs-5">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore eu fugiat
                </span>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} lg={6} sm={12}>
              <Card className="p-3 mb-5 bg-dark text-white">
                <h3 className="mb-3">Secured Device</h3>
                <span className="fs-5">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore eu fugiat
                </span>
              </Card>
            </Col>

            <Col md={6} lg={6} sm={12}>
              <Card className="p-3 mb-5 bg-dark text-white">
                <h3 className="mb-3">No Virus Threat</h3>
                <span className="fs-5">
                  Duis aute irure dolor in repreh enderit in volup tate velit
                  esse cillum dolore eu fugiat
                </span>
              </Card>
            </Col>
          </Row>
        </Container>
        <hr />
      </div> */}

      {/* <div className="Our-services">
      <Container>
        <Row className='justify-content-center'>

          <Col md={4} lg={4} sm={12}>
          <Card className=' mb-5 ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </Col>

          <Col md={4} lg={4} sm={12}>

          <Card className=' mb-5 ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </Col>

          <Col md={4} lg={4} sm={12}>

          <Card className=' mb-5 ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </Col>

        </Row>
      </Container>
    </div> */}

      <Container className="slider mt-5 mb-5 text-center justify-content-center">
        <div className="slider-container pb-5">
          <p className=" text-white pt-5 fs-4 d-flex text-center justify-content-center">
            Our Services
          </p>
          <hr className="w-25 mx-auto text-white" />
          <Slider {...settings}>
            <div className="  d-flex justify-content-center">
              <Card className=" mb-5 cards " style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Laptop Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>Phone Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Tablet Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Laptop Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>Phone Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards " style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Tablet Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Laptop Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards " style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>Phone Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-center">
              <Card className=" mb-5 cards" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Tablet Repair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </Container>

      {/* ------------------------Countup---------------------------- */}
{/* <New/> */}
      <Container fluid className="countup">
        <Row className="text-center">
          <Col md={3} lg={3} sm={6}>
            <div className="element">
              <img className="img-count" />
              <h1 className="count mt-2">
                <CountUp
                  className="counts"
                  start={0}
                  end={20}
                  duration={2}
                  delay={1}
                />
                +
              </h1>
              <p className="count-txt">Glorious Years</p>
            </div>
          </Col>

          <Col md={3} lg={3} sm={6}>
            <div className="element">
              <img className="img-count" />
              <h1 className="count mt-2">
                <CountUp
                  className="counts"
                  start={0}
                  end={2}
                  duration={2}
                  delay={1}
                />
                k+
              </h1>
              <p className="count-txt">Happy Customer</p>
            </div>
          </Col>

          <Col md={3} lg={3} sm={6}>
            <div className="element">
              <img className="img-count" />
              <h1 className="count mt-2">
                <CountUp
                  className="counts"
                  start={0}
                  end={5}
                  duration={2}
                  delay={1}
                />
                k+
              </h1>
              <p className="count-txt">Service Complete</p>
            </div>
          </Col>

          <Col md={3} lg={3} sm={6}>
            <div className="element">
              <img className="img-count" />
              <h1 className="count mt-2">
                <CountUp
                  className="counts"
                  start={0}
                  end={99}
                  duration={2}
                  delay={1}
                />
                %
              </h1>
              <p className="count-txt">Satisfactions</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Carousel start  */}
      <div className="carousel-btm ">
        <h3 className=" headline me-5 pt-5 fs-1 d-flex text-center justify-content-left">
          Our Costomer Reviews
        </h3>

        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <img className="t-img mt-5 mb-5" src={img5} alt="" />
                </Col>
                <Col md={9} lg={9} sm={12}>
                  <div className="abt-para mt-5">
                    <img className="mb-5 q-img" src={img7} alt="" />
                    <br />
                    <span className="mt-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim
                    </span>
                    <br />
                    <h2 className="nick mt-5">Nicholas Marcho</h2>
                    <span>Graphics designer</span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <img className="t-img mt-5 mb-5" src={img5} alt="" />
                </Col>
                <Col md={9} lg={9} sm={12}>
                  <div className="abt-para mt-5">
                    <img className="mb-5 q-img" src={img7} alt="" />
                    <br />
                    <span className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim
                    </span>
                    <br />
                    <h2 className="nick mt-5">Nicholas Marcho</h2>
                    <span>Graphics designer</span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row>
                <Col md={3} lg={3} sm={12}>
                  <img className="t-img mt-5 mb-5" src={img5} alt="" />
                </Col>
                <Col md={9} lg={9} sm={12}>
                  <div className="abt-para mt-5">
                    <img className="mb-5 q-img" src={img7} alt="" />
                    <br />
                    <span className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim
                    </span>
                    <br />
                    <h2 className="nick mt-5">Nicholas Marcho</h2>
                    <span>Graphics designer</span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;








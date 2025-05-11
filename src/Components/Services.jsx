import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion';

import im from '../Assests/phone.jpg';


const Services = () => {
  return (
    <div>
      <Container className="abt-1">
        <div className="text-con1">
          <h1 className="pt-5 mt-5">Services </h1>
          <p className=" pb-5">
            <a khbhref="">Home </a> / Services </p>
        </div>
      </Container>

      <Container className="services mb-5 pb-5">
        <div className="mt-5 pt-5 head-service">
        <p className="animate__animated animate__fadeInDown animate__slow"><b>OUR SERVICES</b></p>
        <h1 className="mt-3 animate__animated animate__fadeInDown animate__slow">Our Efficient Solution</h1>
        </div>
        <Row className="mt-5">
            <Col md={4} lg={4} sm={12}>
                <Card className="con-card">
                    <div className="p-4 item-ser">
                    <h1><i class=" fa-solid fa-mobile-screen"></i></h1>
                    <h2 className="mt-3">Mobile Phone</h2>
                    <p className="text-center mt-3 fs-5">Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur volup in veli</p>
                    </div>
                </Card>
            </Col>

            <Col md={4} lg={4} sm={12}>
                <Card className="con-card">
                    <div className="p-4 item-ser">
                    <h1><i class=" fa-solid fa-tablet"></i></h1>
                    <h2 className="mt-3">Tablet</h2>
                    <p className="text-center mt-3 fs-5">Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur volup in veli</p>
                    </div>
                </Card>
            </Col>

            <Col md={4} lg={4} sm={12}>
                <Card className="con-card">
                    <div className="p-4 item-ser">
                    <h1><i class=" fa-solid fa-laptop"></i></h1>
                    <h2 className="mt-3">Laptop</h2>
                    <p className="text-center mt-3 fs-5">Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur volup in veli</p>
                    </div>
                </Card>
            </Col>

        </Row>

        <Row className="mt-5">
            <Col md={4} lg={4} sm={12}>
                <Card className="con-card">
                    <div className="p-4 item-ser">
                    <h1><i class=" fa-solid fa-computer"></i></h1>
                    <h2 className="mt-3">Computer </h2>
                    <p className="text-center mt-3 fs-5">Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur volup in veli</p>
                    </div>
                </Card>
            </Col>

            <Col md={4} lg={4} sm={12}>
                <Card className="con-card">
                    <div className="p-4 item-ser">
                    <h1><i class=" fa-solid fa-camera"></i></h1>
                    <h2 className="mt-3">Camera</h2>
                    <p className="text-center mt-3 fs-5">Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur volup in veli</p>
                    </div>
                </Card>
            </Col>

            <Col md={4} lg={4} sm={12}>
                <Card className="con-card">
                    <div className="p-4 item-ser">
                    <h1><i class=" fa-brands fa-apple"></i></h1>
                    <h2 className="mt-3">Wearable Device</h2>
                    <p className="text-center mt-3 fs-5">Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur volup in veli</p>
                    </div>
                </Card>
            </Col>
            
        </Row>
      </Container>

      <Container className="FAQ pb-5">
        <Row>
            <Col md={6} lg={6} sm={12}>
             <span className="que  fs-6">GENERAL QUESTIONS</span>
             <h1 className="mt-3">Frequently Asked Questions</h1>
             <span>Can't find what you're looking for? <a className="text-danger" href="">Contact Us </a></span>
             <img className="mt-3 ser-img" src={im} alt="" />
            </Col>

            <Col className=" p-5" md={6} lg={6} sm={12}>
            
            <Accordion className="pt-4 mt-4" defaultActiveKey="1">
            <Accordion.Item className="accordion-body" eventKey="0">
            <Accordion.Header className="ard-head">Can I purchase products both online and in-store?</Accordion.Header>
            <Accordion.Body>
            Yes, you can conveniently shop for our electronic products both online through our website and in-store at our physical location. We aim to provide flexibility for our customers.
             </Accordion.Body>
             </Accordion.Item>
      </Accordion>

      <Accordion className="mt-4" defaultActiveKey="1">
            <Accordion.Item className="accordion-body" eventKey="0">
            <Accordion.Header className="ard-head">Are your products brand new and genuine?</Accordion.Header>
            <Accordion.Body>
            Absolutely! We guarantee that all our products are brand new, genuine, and sourced directly from reputable manufacturers and authorized distributors.
             </Accordion.Body>
             </Accordion.Item>
      </Accordion>

      <Accordion className="mt-4" defaultActiveKey="1">
            <Accordion.Item className="accordion-body" eventKey="0">
            <Accordion.Header className="ard-head">Do you offer warranties for electronic products?</Accordion.Header>
            <Accordion.Body>
      Our electronic store offers a wide range of products, including smartphones, laptops, tablets, cameras, audio devices, smart home gadgets, gaming consoles, and various accessories.
             </Accordion.Body>
             </Accordion.Item>
      </Accordion>


      <Accordion className="mt-4" defaultActiveKey="1">
            <Accordion.Item className="accordion-body" eventKey="0">
            <Accordion.Header className="ard-head">Is there aoyalty program for regular customers?</Accordion.Header>
            <Accordion.Body>
            Yes, we value our customers, and we offer rewards or loyalty programs to show our appreciation for your continued support. Check our website or inquire in-store for current promotions.
             </Accordion.Body>
             </Accordion.Item>
      </Accordion>
      
   
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

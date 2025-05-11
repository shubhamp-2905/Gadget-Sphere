import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';

// import CardBody from 'react-bootstrap/esm/CardBody';
import im from '../Assests/contact.jpg';
const Contact = () => {
  return (
<div className='body-con pt-2'>
    <Container className="contact ">

        <div className="text-con1">
       <h1 className='pt-5 mt-5'>Contact Us </h1>./.
       <p className=' pb-5'>
        <a href="">Home </a> / Contact
       </p>
       </div>
    </Container>


    <Container className='mt-5 pt-5 pb-5 mb5'>
      <Row className='mt-5 pb-5'>
        <Col md={4} lg={4} sm={4}>
          <Card className='con-card'>
            <div className="p-4">
            <h3 >  <i class="fas fa-envelope"> </i> Email Us </h3>
            <span className='fs-5'>info@yourwebsite.com <br />
                                admin@yourwebsite.com</span>
                            </div>
          </Card>
        </Col>
        <Col md={4} lg={4} sm={4}>
          <Card className='con-card'>
          <div className="p-4">
            <h3>  <i class="fas fa-phone"> </i> Call Us </h3>
            <span className='fs-5'>(+021) 345 678 910 <br />
                                   (+800) 7000 234</span>
</div>
          </Card>
        </Col>
        <Col md={4} lg={4} sm={4}>
          <Card className='con-card'>
          <div className="p-4">
            <h3>  <i class="fa-solid fa-building"></i> Head Office </h3>
            <span className='fs-5'>Jl Yos Sudarso No 1 Pangkal <br /> Pinang, Tlp 0717-421737</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>


    <Container>
      <Row>
      <Col md={7} lg={7} sm={12}>
          <img className='contact-imgs' src={im} alt="" />
        </Col>        

        <Col md={5} lg={5} sm={12}>
          <div className='box-c'>
            <h6> SEND A MESSAGE</h6>
            <h2>Get In Touch Today</h2>
            {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> */}

            <div className="small-box">
            <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                        <Form.Control type="email" placeholder="Name" />
                      </div>
                      
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <Form.Control type="email" placeholder="E-mail" />
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <Form.Control type="email" placeholder="" />
                      </div>

                      <div class="mb-3">
                        
                        <textarea name="" id="" cols="" rows="">Your Message</textarea>
                      </div>

                      <button type="button" class="btn btn-outline-dark">Send Message</button>
                
            </div>
          </div>
        </Col>


      </Row>
    </Container>
    </div>
  )
}

export default Contact
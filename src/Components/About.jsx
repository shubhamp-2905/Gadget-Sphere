import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import im from '../Assests/lapy.png';
import img from "../Assests/tmsn-1.png";
import img2 from "../Assests/tmsn-2.png";
import img3 from "../Assests/tmsn-3.png";

// import img2 from "../Assests/tms2.png";
import CountUp from "react-countup";

const About = () => {
  return (
    <div>

<Container className="abt-1">

<div className="text-con1">
<h1 className='pt-5 mt-5'>About Us </h1>
<p className=' pb-5'>
<a href="">Home </a> / About
</p>
</div>
</Container>

<Container>
    <Row>
        <Col md={6} lg={6} sm={12}>

        <h1 className='animate__animated animate__fadeInLeft animate__slow pt-5 mt-5'>Gives You Quality Products At The Best Prices</h1>
        <p className='animate__animated animate__fadeInLeft animate__slow mt-4'>Etiam at purus eu augue congue aliquam tempor ac nulla. Suspendisse venenatis consectetur commodo. Nunc tincidunt odio massa, ut suscipit dui consectetur eget. Cras vestibulum orci odio, non imperdiet nisl maximus quis. Morbi gravida nisl vel orci iaculis pretium. Nam tellus ipsum.</p>
        <button type="button" class="animate__animated animate__fadeInLeft animate__slow mt-4 btn btn-outline-dark">View Products</button>
        
        </Col>

        <Col md={6} lg={6} sm={12}>
        
            <img  className='lapy animate__animated animate__fadeInRight animate__slow 1s' src={im} alt="" />
        </Col>
    </Row>
</Container>

<Container className='counter-abt mb-5'> 
<Row className="text-center">
  {/* <h3> Know About Us </h3> */}
          <Col md={3} lg={3} sm={6}>
            <div className="cnt-m">
              <img className="img-count" />
              <h1 className="count ">
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
            <div className="cnt-m">
              <img className="img-count" />
              <h1 className="count">
                <CountUp
                  className="counts"
                  start={0}
                  end={2000}
                  duration={2}
                  delay={1}
                />
                +
              </h1>
              <p className="count-txt">Happy Customer</p>
            </div>
          </Col>

          <Col md={3} lg={3} sm={6}>
            <div className="cnt-m">
              <img className="img-count" />
              <h1 className="count ">
                <CountUp
                  className="counts"
                  start={0}
                  end={5000}
                  duration={2}
                  delay={1}
                />
                +
              </h1>
              <p className="count-txt">Service Complete</p>
            </div>
          </Col>

          <Col md={3} lg={3} sm={6}>
            <div className="cnt-m">
              <img className="img-count" />
              <h1 className="count ">
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

<div className="con-test">
<Container>
  <Row className='pt-5 pb-5 '>
    <h2 className='pb-3'><b> Our Happy Costomers</b> </h2>
    <Col md={4} lg={4} sm={12}>
      <div className="ms-5 abt-card p-5 text-center">
        
        <h4>
            "My new camera from GadgetSphere takes stunning photos! Love the quick delivery and easy return policy."</h4>
            <img className='tms-img mt-3' src={img} alt="" />
            <p><b>Tim David</b></p>
            <span>Happy Costomer</span>
      </div>
    </Col>

    <Col md={4} lg={4} sm={12}>
      <div className="ms-5 abt-card p-5 text-center">
        
        <h4>
      

"GadgetSphere experts helped me find the perfect laptop for my creative needs. So grateful !"
</h4>
            <img className='tms-img mt-3' src={img2} alt="" />
            <p><b>Sarah K.</b></p>
            <span>Happy Costomer</span>
      </div>
    </Col>

    <Col md={4} lg={4} sm={12}>
      <div className="ms-5 abt-card p-5 text-center">
        
        <h4>
        "Finally, a store that doesn't overcharge! GadgetSphere prices are fair and their service is top-notch."</h4>
            <img className='tms-img mt-3' src={img3} alt="" />
            <p><b>Sophie Din</b></p>
            <span>Happy Costomer</span>
      </div>
    </Col>
  </Row>
</Container>
</div>
    </div>
  )
}

export default About
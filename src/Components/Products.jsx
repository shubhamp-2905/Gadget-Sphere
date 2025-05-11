import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from "react-bootstrap/Card";
import imgs1 from "../Assests/product1.png";
import imgs2 from "../Assests/product2.png";
import imgs3 from "../Assests/product3.png";
import imgs4 from "../Assests/product4.png";
import imgs5 from "../Assests/product5.png";
import imgs6 from "../Assests/product6.png";
import imgs7 from "../Assests/product7.png";
import imgs8 from "../Assests/product8.png";
import Button from "react-bootstrap/Button";

import im1 from "../Assests/lapy1.png";
import im2 from "../Assests/lapy3.png";


const Products = () => {
  return (
    <div>
        <Container className="abt-1">
        <div className="text-con1">
          <h1 className="pt-5 mt-5">Products </h1>
          <p className=" pb-5">
            <a href=""> Home </a> /Products
          </p>
        </div>
      </Container>
      <Container>
            <Row className='mt-5'>
                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs5} alt="" />
                    <h5 className="text-center">HP Victus Gaming</h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>74,999</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs6} alt="" />
                    <h5 className="text-center">Acer Swift</h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>99,990</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs7} alt="" />
                    <h5 className="text-center">HP Pavilion Gaming</h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>71,343</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs4} alt="" />
                    <h5 className="text-center">Acer Aspire 3 </h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>55,999</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>
            </Row>

            <Row className='mt-5 pb-5'>
                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs1} alt="" />
                    <h5 className="text-center">HP Victus Core</h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>64,099
</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs2} alt="" />
                    <h5 className="text-center">ASUS Vivobook S14 Flip</h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>79,990</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs3} alt="" />
                    <h5 className="text-center">ASUS Tuff Gaming</h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>74,990</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>

                <Col md={3} lg={3} sm={12}>
                <Card className="sm-cards pb-3">
                    <img src={imgs8} alt="" />
                    <h5 className="text-center">ASUS Vivobook </h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>1,04,990</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">Buy Now</button>
                 </div>

                  </Card>
                </Col>
            </Row>
        </Container>




{/* ------------------------------------------------------------------------------------------------- */}


<div className="main-item">
        <Container>
          <Row className="pt-5 ">
            <Col className="p-4 mt-5" md={5} lg={5} sm={12}>
            <h6 >HIGHLIGHT ITEM</h6>
            
            <h1 className="mt-3">Discover Our Selected Items</h1>
            <span className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
             <div className="mt-3 icon-tick">
             <h6><i  class="fa-solid fa-circle-check"></i>Most liked</h6>
             <h6><i  class="fa-solid fa-circle-check"></i>Trending on the week</h6>
             <h6><i  class="fa-solid fa-circle-check"></i>High quality </h6>
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
                    <img src={im1} alt="" />
                    <h5 className="text-center">Galaxy Book4 Pro</h5>
                    <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>1,39,990</h5>

                    <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">View Product</button>
                 </div>

                  </Card>
                  </Col>

                  <Col md={6} lg={6} sm={6}>

                  <Card className="sm-cards pb-3">
                 <img src={im2} alt="" />
                 <h5 className="text-center">Hp Victus</h5>
                 <h5 className="rupe-icon text-center"><i class="fa-solid fa-indian-rupee-sign"></i>72,999</h5>
                  <div className="mt-4 text-center btnss">
                 <button type="button" class="btn btn-dark">View Product</button>
                 </div>

                 </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Products
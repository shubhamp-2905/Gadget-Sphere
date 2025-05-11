import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Footer = () => {
  return (
<>
    <Container fluid className='Footer bg-black pt-5 '>
    <footer class="site-footer">
    <div class="site-footer-shape-1 float-bob-y" ></div>
    <div class="site-footer__top">
        <div class="container">
            <div class="row">
                <div class="Ftr1 col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms" >
                    <div class="footer-widget__column footer-widget__about">
                        <div class="Brand-name footer-widget__logo">
                                 Gadget Sphere    
                        </div>
                        <div class="footer-widget__about-text-box mt-4">
                            <p class="footer-widget__about-text">Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                        </div>
                        <div class="footer-widget__social-box">
                            <h4 class="footer-widget__social-title mt-2">Stay Connected</h4>
                            <div class="site-footer__social">
                                <a href="#"><i class="fab fa-twitter mx-2"></i></a>
                                <a href="#"><i class="fab fa-facebook  mx-2"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p  mx-2"></i></a>
                                <a href="#"><i class="fab fa-instagram  mx-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" Ftr2 col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms" >
                    <div class="footer-widget__column footer-widget__links">
                        <div class="footer-widget__title-box">
                            <h3 class="footer-widget__title">Quick Links</h3>
                        </div>
                        <ul class="footer-widget__Explore-list list-unstyled">
                            <li className='mt-3'><a href="index.html">Home</a></li>
                            <li className='mt-3'><a href="about.html">About Us</a></li>
                            <li className='mt-3'><a href="services.html">Services</a></li>
                            <li className='mt-3' ><a href="blog-v-1.html">Blog</a></li>
                            <li className='mt-3'><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="Ftr3 col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms" >
                    <div class="footer-widget__column footer-widget__services">
                        <div class="footer-widget__title-box">
                            <h3 class="footer-widget__title">Our Services</h3>
                        </div>
                        <ul class="footer-widget__services-list list-unstyled">
                            <li className='mt-3'><a href="services-details.html">Smartphone Repair</a></li>
                            <li className='mt-3'><a href="services-details.html">Laptop Repair</a></li>
                            <li className='mt-3'><a href="services-details.html">Desktop Repair</a></li>
                            <li className='mt-3'><a href="services-details.html">Tablet Repair</a></li>
                            <li className='mt-3'><a href="services-details.html">Smart Watch Repair</a></li>
                        </ul>
                    </div>
                </div>
                <div class="Ftr4 col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="400ms" >
                    <div class="footer-widget__column footer-widget__Contact">
                        <div class="footer-widget__title-box">
                            <h3 class="footer-widget__title">Contact Us</h3>
                        </div>
                        <ul class="footer-widget__Contact-list list-unstyled">
                            <li>
                                <div class="icon">
                                    <span class="fas fa-map"></span>
                                </div>
                                <div class="text">
                                    <p>32 Main Street, Miami, <br/> Florida 19091, FL</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="fas fa-headphones"></span>
                                </div>
                                <div class="text">
                                    <p>
                                        <a href="tel:6668880000">666 888 0000</a>
                                        <a href="tel:4448880000">444 888 0000</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="fas fa-envelope"></span>
                                </div>
                                <div class="text">
                                    <p>
                                        <a href="mailto:needhelp@company.com">gadgetspherepopular636@company.com</a>
                                     
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="site-footer__bottom mt-5">
        <div class="container">
            <div class="site-footer__bottom-inner">
                <p class="site-footer__bottom-text">© 2023 Copyright by <a href="">Shubham Paikrao</a></p>
            </div>
        </div>
    </div>
</footer>
</Container>

</>
  )
}

export default Footer
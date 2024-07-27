import React from 'react'
import "./style.css"
import logo from "./images/Bridge-logo.png"
import award from "./images/award.png"
import lady from "./images/1-about.png"
import sales from "./images/2-about.png"
import men from "./images/support-1.png"
import inter from "./images/support.png"
import nip from "./images/nipun (1).png"
import lax from "./images/laxmikant.png"
import boy from"./images/side-img.png"
export default function Homepage() {
    return (
        <div>

            <header>
                <nav class="navbar">
                  <a href=""> <img src={logo} alt="" width={46} height={37}/></a> 
                    <input type="checkbox" id="menu-toggler" />
                    <label for="menu-toggler" id="hamburger-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </label>
                    <ul class="all-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <section class="homepage" id="home">
                <div class="content">
                    <div class="text">
                        <h1>Camping Gear and Essentials</h1>
                        <p>
                            Discover top-quality camping gear for unforgettable outdoor adventures. <br /> Gear up and make lasting
                            memories.</p>

                        <a href="#services">Our Services</a>
                    </div>
                    <div class="hero-banner-img">
                        <img class="banner-image" src={award} width="350px" height="400px" />
                    </div>
                </div>
            </section>


            <section class="services-section" id="services">
                <h2 class="services-title">Discover what Bridge can do for you</h2>
                

              
<div class="wrapper">
  <div class="card"><img src={lady}/>
    <div class="info">
      <h2>Marketing</h2>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
  <div class="card"><img src={sales}/>
    <div class="info">
      <h2>sales</h2>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
  <div class="card"><img src={men}/>
    <div class="info">
      <h2>Service support</h2>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
  <div class="card"><img src={inter}/>
    <div class="info">
      <h2>Integration</h2>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
</div>
            </section>



            <section>
                <div class="container">
                    <div class="rows">
                        
                        
                        <div class="col-md-4">
                            <div class="pricing-table purple">
                                <div class="pricing-label">Fixed Price</div>
                                <h2>BasicPack 2020</h2>
                                <h5>Made for starters</h5>
                                <div class="pricing-features">
                                    <div class="feature">Bandwith<span>50 GB</span></div>
                                    <div class="feature">Add-On Domains<span>10</span></div>
                                    <div class="feature">SSD Storage<span>250 GB</span></div>
                                    <div class="feature">Mail Adresses<span>25</span></div>
                                    <div class="feature">Support<span>Only Mail</span></div>
                                </div>
                                <div class="price-tag">
                                    <span class="symbol">$</span>
                                    <span class="amount">7.99</span>
                                    <span class="after">/month</span>
                                </div>
                                <a class="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing-table turquoise">
                                <div class="pricing-label">Fixed Price</div>
                                <h2>ExtendedPack 2020</h2>
                                <h5>Made for experienced users</h5>
                                <div class="pricing-features">
                                    <div class="feature">Bandwith<span>150 GB</span></div>
                                    <div class="feature">Add-On Domains<span>25</span></div>
                                    <div class="feature">SSD Storage<span>500 GB</span></div>
                                    <div class="feature">Mail Adresses<span>50</span></div>
                                    <div class="feature">Support<span>Mail/Phone</span></div>
                                </div>
                                <div class="price-tag">
                                    <span class="symbol">$</span>
                                    <span class="amount">9.99</span>
                                    <span class="after">/month</span>
                                </div>            <a class="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing-table red">
                                <div class="pricing-label">Fixed Price</div>
                                <h2>ProsPack 2020</h2>
                                <h5>Made for professionals/agencies</h5>
                                <div class="pricing-features">
                                    <div class="feature">Bandwith<span>250 GB</span></div>
                                    <div class="feature">Add-On Domains<span>50</span></div>
                                    <div class="feature">SSD Storage<span>1 TB</span></div>
                                    <div class="feature">Mail Adresses<span>75</span></div>
                                    <div class="feature">Support<span>7/24</span></div>
                                </div>
                                <div class="price-tag">
                                    <span class="symbol">$</span>
                                    <span class="amount">12.99</span>
                                    <span class="after">/month</span>
                                </div>
                                <a class="price-button" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="about" id="about">
                <h2>About Us</h2>
                <div>
                    <div className='contact us'>
                        <div className=''>
                            <h2>We’re changing the way people think about CRM</h2>
                            <p>
Welcome to BRIDGE, the end-to-end CRM software that redefines customer relationship management. Our tailored solution provides a unified ecosystem for managing all aspects of your customer relationship - from sales and marketing to service and satisfaction. With BRIDGE, elevate service quality, improve information flow, better marketing campaigns, shorten sales cycles, and enhance productivity across your organization.

Our user-friendly and adaptable software is designed to help businesses of all sizes achieve their real potential. Experience the power of BRIDGE and take your business to new heights with a holistic CRM solution that delivers results in one ecosystem. Transform the way you connect with your customers and streamline your business processes with BRIDGE.</p>
                        </div>
                        <div className=''>
                            <h2> Our Mission</h2>
                            <p>
                           
Our mission is to simplify the complexities of customer relationship management by providing a revolutionary end-to-end CRM software that empowers businesses to connect with their customers seamlessly. We aim to enhance productivity and ensure our clients achieve their full potential by offering a unified ecosystem for all customer-related needs.
                            </p>
                        </div>
                        <div className='founder'>
                        <div className='foundhead'>
                            <img src={nip} alt="" />
                            <h2>Nipun Dixit</h2>
                            <h4>Founder of Bridge</h4>
                        </div>
                        <div className='foundhead'>
                            <img src={lax} alt="" />
                            <h3>Laxmikant Dixit</h3>
                            <h5>Managing Director</h5>
                        </div>
                        </div>
                    </div>
                </div>
               
                
            </section>


            <section class="contact" id="contact">
                <h2>Contact Us</h2>
                <p>Reach out to us for any inquiries or feedback.</p>
                <div class="row">
                    <img src={boy} alt="" />
                    <div class="col form">
                        <form>
                            <input type="text" placeholder="Name*" required />
                            <input type="email" placeholder="Email*" required />
                            <input type="phone" placeholder="Phone*" required />
                            <input type="name" placeholder="Company Name*" required />
                            <input type="subject" placeholder="Subject*" required />
                            <textarea placeholder="Question/Comment*" required></textarea>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>+91-888-2709-959</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    
                                    <div class="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec
                                            tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                               
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

import './Pages/css/style.css'

import React, { Component } from 'react'

 import { Route , BrowserRouter as Router, Switch ,withRouter,Link} from "react-router-dom";

import Design from '../component/Design'
import Profile from '../component/Profile'


import hamberger from  './images/hamberger.svg'

import articleph1 from  './images/article-ph-1.png'
import articleph2 from  './images/article-ph-2.png'
import articleph3 from  './images/article-ph-3.png'


import times from './images/times.svg'
import man from './images/man-2.png'
import bag from './images/bag.svg'
import logo from './images/logo.svg'

class  Home extends React.Component
{
    render()
    {
    return(
        
         <>
             {/* ./images/hamberger.svg */}
      <div className="site-main-wrapper">
            <button className="hamberger">
                <img src={hamberger} alt=""/>
                </button>
          

        <div className="mobile-nav">
            <button className="times"><img src={times} alt=""/></button>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
        </div>
        <header>
            <div className="container">
                <nav id="main-nav" className="flex items-center justify-between">
                    <div className="left flex items-center">
                        <div className="branding">
                            <img src={logo} alt=""/>
                        </div>
                        <div>
                            <a href="#">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#work">Work</a>
                            <a href="#blog">Blog</a>



                      
                            <Route exact path="/" component={withRouter(Home)}  />
                 <Route exact path="/Design" component={withRouter(Design)} />
                 <Route exact path="/Profile" component={withRouter(Profile)} />


                        </div>
                    </div>
                    <div className="right">
                        <button className="btn btn-primary">Contact</button>
                    </div>
                </nav>
                <div className="hero flex items-center justify-between">
                    <div className="left flex-1 flex justify-center">
                        <img src="./images/man.png" alt=""/>
                    </div>
                    <div className="right flex-1">
                        <h6>Johnathan Vics</h6>
                        <h1>I’m a Creative <span>Designer</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
                            laboris
                            nisi ut aliquip ex ea commodo consequat</p>
                        <div>
                            <button className="btn btn-secondary">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about" className="about">
            <div className="container flex items-center about-inner-wrap">
                <div className="flex-1">
                    <img className="about-me-img" src={man} alt=""/>
                </div>
                <div className="flex-1 right">
                    <h1>About <span>Me</span></h1>
                    <h3>Hello! i’m Johnathan Vics.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat</p>
                    <div className="social">
                        <a href="#"><img src="./images/website.svg" alt=""/></a>
                        <a href="https://www.facebook.com/codersgyan"><img src="./images/facebook.svg" alt=""/></a>
                        <a href="https://twitter.com/CoderGyan"> <img src="./images/twitter.svg" alt=""/></a>
                        <a href="#"> <img src="./images/pintrest.svg" alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
        <section id="services" className="services">
            <div className="container">
                <h1 className="section-heading"><span>Our </span>Services</h1>
                <p>We provide high standar clean website for your business solutions</p>
                <div className="card-wrapper">
                    <div className="card">
                        <img src="./images/brush.svg" alt=""/>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/code.svg" alt=""/>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src={bag} alt=""/>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/desktop.svg" alt=""/>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/media.svg" alt=""/>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/phone.svg" alt=""/>
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="freelancer">
            <h1>I Am Available For Freelancer.</h1>
            <p>We provide high standar clean website for your business solutions</p>
            <button className="btn btn-primary">Download CV</button>
        </section>
        <section className="reviews">
            <div className="container">
                <h1 className="section-heading"><span>Our</span> Client</h1>
                <p>We provide high standar clean website for your business solutions</p>
                <div className="slider">
                    <div className="slide">
                        <img src="./images/lady.png" alt=""/>
                        <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum"</p>
                        <span>- John Doel, Company ABC</span>
                    </div>
                    <div className="slide">
                        <img src="./images/lady.png" alt=""/>
                        <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum"</p>
                        <span>- John Doel, Company ABC</span>
                    </div>
                    <div className="slide">
                        <img src="./images/lady.png" alt=""/>
                        <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum"</p>
                        <span>- John Doel, Company ABC</span>
                    </div>
                    <div className="slide">
                        <img src="./images/lady.png" alt=""/>
                        <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum"</p>
                        <span>- John Doel, Company ABC</span>
                    </div>
                </div>
                <div className="slider-dots"></div>
            </div>
        </section>

        <section id="work" className="work">
            <div className="container">
                <h1 className="section-heading"><span>Our</span> Works</h1>
                <p>We provide high standar clean website for your business solutions</p>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src="./images/ph-1.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src="./images/ph-1.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src="./images/ph-1.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src="./images/ph-1.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src="./images/ph-1.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src="./images/ph-1.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section id="blog" className="blog">
            <div className="container">
                <h1 className="section-heading"><span>Our</span> Blog</h1>
                <p>We provide high standar clean website for your business solutions</p>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="img-wrapper">
                            <img src={articleph1}alt=""/>
                        </div>
                        <div className="card-content">
                            <a href="#">
                                <h1>Occusamus et iusto odio</h1>
                            </a>
                            <span>May 12, 2017</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim id est laborum.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-wrapper">
                            <img src={articleph1} alt=""/>
                        </div>
                        <div className="card-content">
                            <a href="#">
                                <h1>Occusamus et iusto odio</h1>
                            </a>
                            <span>May 12, 2017</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim id est laborum.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-wrapper">
                            <img src={articleph1} alt=""/>
                        </div>
                        <div className="card-content">
                            <a href="#">
                                <h1>Occusamus et iusto odio</h1>
                            </a>
                            <span>May 12, 2017</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim id est laborum.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact">
            <div className="container">
                <h1 className="section-heading">Contact <span>Us</span></h1>
                <p>We provide high standar clean website for your business solutions</p>
                <div className="card-wrapper">
                    <div className="card">
                        <img src="./images/phone-2.svg" alt=""/>
                        <h1>Call Us On</h1>
                        <h6>+985 123 7856</h6>
                    </div>
                    <div className="card">
                        <img src="./images/msg.svg" alt=""/>
                        <h1>Email Us At</h1>
                        <h6>support@companyname.com</h6>
                    </div>
                    <div className="card">
                        <img src="./images/map.svg" alt=""/>
                        <h1>Visit Office</h1>
                        <h6>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</h6>
                    </div>

                </div>

                <form action="">
                    <div className="input-wrap">
                        <input type="text" placeholder="Your Name *"/>
                        <input type="email" placeholder="Your Email *"/>
                    </div>
                    <div className="input-wrap-2">
                        <input type="text" placeholder="Your Subject..."/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message..."></textarea>
                    </div>
                    <div className="btn-wrapper">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        <footer>
            <img className="footer-logo" src="./images/logo-2.svg" alt=""/>
            <div className="footer-socials">
                <a href="#"><img src="./images/website.svg" alt=""/></a>
                <a href="https://www.facebook.com/codersgyan"><img src="./images/facebook.svg" alt=""/></a>
                <a href="https://twitter.com/CoderGyan"> <img src="./images/twitter.svg" alt=""/></a>
                <a href="#"> <img src="./images/pintrest.svg" alt=""/></a>
                <a href="https://www.instagram.com/codersgyan/"> <img src="./images/instagram.svg" alt=""/></a>
            </div>
            <div className="copyright">
                Copyright 2020 © Coder's Gyan
            </div>
        </footer>
    </div>
    
         </>

        
    )
}
}
export default Home;
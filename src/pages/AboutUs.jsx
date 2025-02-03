import React from 'react';
import '../styles/Aboutus.css';
// import aboutImage from '../images/about us.jpg';
// import herocontact from '../images/herocontact.jpg';



function AboutUs() {
    return (
        <div >
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            {/* ✅ الـ Hero Section مع النص داخله */}
            <section className="hero-section position-relative text-white text-center" style={{ minHeight: '50vh', position: 'relative' }}>
                {/* <img 
                    src={herocontact} 
                    className="img-fluid w-100" 
                    alt="Contact Us" 
                    style={{ objectFit: 'cover', height: '50vh' }}
                /> */}
                
                {/* ✅ Overlay خلف النص لجعله أكثر وضوحًا */}
                <div className="overlay position-absolute top-0 left-0 w-100 h-100" style={{
                    background: 'rgba(0, 0, 0, 0.5)', // شفافية داكنة 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '20px'
                }}>
                    <h1 className="fw-bold" style={{ fontSize: '2.5rem', textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>About TickDone</h1>
                    <p className="lead w-75 mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
                        At TickDone, we are passionate about transforming how teams manage and collaborate on tasks. Our innovative platform offers efficient task management solutions designed to maximize productivity, streamline communication, and improve overall workflow. 
                    </p>
                </div>
            </section>

            {/* ✅ About Us Section */}
            <section id="about-section" className="pt-5 pb-5">
                <div className="container wrapabout">
                    <div className="row">
                        <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                            <div className="blockabout">
                                <div className="blockabout-inner text-center text-sm-start">
                                    <div className="title-big pb-3 mb-3">
                                        <h3>About Us</h3>
                                    </div>
                                    <p className="description-p text-muted pe-0 pe-lg-0">
                                        At TickDone, we are a team of experienced professionals focused on delivering state-of-the-art task management solutions. We are committed to helping businesses, teams, and individuals boost their productivity through powerful and easy-to-use tools. 
                                    </p>
                                    <p className="description-p text-muted pe-0 pe-lg-0">
                                        Our platform is designed to simplify task tracking, foster collaboration, and ensure timely completion of projects. Whether you're managing small tasks or large-scale projects, TickDone is here to support your goals every step of the way.
                                    </p>
                                    <div className="sosmed-horizontal pt-3 pb-3">
                                        <a href="#/"><i className="fa fa-facebook"></i></a>
                                        <a href="#/"><i className="fa fa-instagram"></i></a>
                                        <a href="#/"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    <a href="#/" className="btn rey-btn mt-3">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <figure className="potoaboutwrap">
                                {/* <img src={aboutImage} alt="About Us" /> */}
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
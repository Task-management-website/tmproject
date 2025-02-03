import React from 'react';
import '../styles/contactus.css';
// import herocontact from '../images/herocontact.jpg';

function ContactUs() {
    return (
        <div>
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
                    <h1 className="fw-bold" style={{ fontSize: '2.5rem', textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>We're here to help!</h1>
                    <p className="lead w-75 mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
                        Don't hesitate to reach out to us for more information, any questions, or inquiries about our services. 
                        We're always ready to help you find the best solutions to meet your needs!
                    </p>
                </div>
            </section>

            {/* ✅ قسم الـ Contact Form و المعلومات */}
            <div id="contact" className="contact-area section-padding">
                <div className="container">
                    <div className="row">
                        {/* ✅ نموذج التواصل */}
                        <div className="col-lg-7">    
                            <div className="contact">
                                <form className="form" name="enq" method="post" action="contact.php">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Name" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" className="form-control" placeholder="Email" required />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea rows="6" name="message" className="form-control" placeholder="Your Message" required></textarea>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="submit" className="btn btn-contact-bg">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> 

                        {/* ✅ Contact Information */}
<div className="col-lg-5">
    <div className="single_address">
        <i className="fa fa-map-marker"></i>
        <h4>Our Address</h4>
        <p>King Abdullah II Street, Amman, Jordan</p>
    </div>
    <div className="single_address">
        <i className="fa fa-envelope"></i>
        <h4>Send your message</h4>
        <p>contact@tickdone.jo</p>
    </div>
    <div className="single_address">
        <i className="fa fa-phone"></i>
        <h4>Call us on</h4>
        <p>(+962) 6 555 1234</p>
    </div>
    <div className="single_address">
        <i className="fa fa-clock-o"></i>
        <h4>Work Time</h4>
        <p>Mon - Fri: 08:00 - 16:00 <br/>Sat: 10:00 - 14:00</p>
    </div>
</div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default ContactUs;
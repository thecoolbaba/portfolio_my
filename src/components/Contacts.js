import React from "react";
import '../components/Contacts.css'

function Contacts() {
    return(
        <div className="contact-container" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <div className="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101723.02920539584!2d-8.535279049999998!3d37.1801624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b28eca9242961%3A0x93fcc923718014e1!2zUG9ydGltw6Nv!5e0!3m2!1sen!2spt!4v1710504328147!5m2!1sen!2spt"
                width="400" 
                height="300"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                eferrerpolicy="no-referrer-when-downgrade"
                title="Google Map with location: Portugal, Portimao"
                ></iframe>
            </div>
            <div className="text-container">
                <h2>Have a question or want to work together?</h2>
                <div className="email">
                    <a href="mailto:nataliboiko.ua@gmail.com">nataliboiko.ua@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;

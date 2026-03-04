import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.596317280373!2d77.32843225582907!3d28.59530416095799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50405b52da5%3A0xa0f00c5abf50f6de!2sSector%2012%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1772557390946!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
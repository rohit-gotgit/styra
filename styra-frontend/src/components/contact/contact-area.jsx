import React from "react";
import Image from "next/image";
// internal
import ContactForm from "../forms/contact-form";
import contact_icon_1 from "@assets/img/contact/contact-icon-1.png";
import contact_icon_2 from "@assets/img/contact/contact-icon-2.png";
import contact_icon_3 from "@assets/img/contact/contact-icon-3.png";

const ContactArea = () => {
  return (
    <>
      <section className="tp-contact-area pb-100">
        <div className="container">
          <div className="tp-contact-inner">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="tp-contact-wrapper">
                  <h3 className="tp-contact-title">Sent A Message</h3>

                  <div className="tp-contact-form">
                    {/* form start */}
                    <ContactForm />
                    {/* form end */}
                    <p className="ajax-response"></p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="tp-contact-info-wrapper">
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_1} alt="contact-icon" />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p data-info="mail">
                        <a href="mailto:viciousdotro@gmail.com">viciousdotro@gmail.com</a>
                      </p>
                      <p data-info="phone">
                        <a href="tel:+91-8738913530">+91 8738913530</a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_2} alt="contact-icon" />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <p>
                        <a
                          href="https://www.google.com/maps/place/Sector+12,+Noida,+Uttar+Pradesh/@28.5953042,77.3284323,15z/data=!3m1!4b1!4m6!3m5!1s0x390ce50405b52da5:0xa0f00c5abf50f6de!8m2!3d28.5962491!4d77.3396212!16s%2Fg%2F1tfwhrm_?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                        >
                          Sector-12, Noida, Uttar Pradesh
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="tp-contact-info-item">
                    <div className="tp-contact-info-icon">
                      <span>
                        <Image src={contact_icon_3} alt="contact-icon" />
                      </span>
                    </div>
                    <div className="tp-contact-info-content">
                      <div className="tp-contact-social-wrapper mt-5">
                        <h4 className="tp-contact-social-title">
                          Find on social media
                        </h4>

                        <div className="tp-contact-social-icon">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;

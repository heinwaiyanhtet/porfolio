import type { NextPage } from "next";
import { useState } from "react";
import { ContactTitle } from "./contact-title";
import { ContactInformation } from "./contact-information";
const Contact: NextPage = () => {
  
  return (
    <>
      <section className="contact section" id="contact">

        <div className="container">
          
         <ContactTitle />

         <ContactInformation />
         
          {/* Contact Form */}
          <div className="row">

            <form className="contact-form padd-15">

              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>

            </form>
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;

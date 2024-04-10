"use client"

export function ContactInformation(){
    return(

        <div className="row">

              {/* contact-info-item */}
              <div className="contact-info-item padd-15">
                <div className="icon">
                  <i className="fa fa-map-marker" />
                </div>
                <h4>Address</h4>
                <p>Yangon, Myanmar</p>
              </div>
              {/* contact-info-item Ended */}
              {/* contact-info-item */}

              <div className="contact-info-item padd-15">
                <div className="icon">
                  <i className="fa fa-phone" />
                </div>
                <h4>Call Us On</h4>
                <p> +959 09886787085</p>
              </div> 

              {/* contact-info-item Ended */}
              {/* contact-info-item */}
              <div className="contact-info-item padd-15">
                <a href="mailto:heinwaiyanhtet20042020@gmail.com">
                    <div className="icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <h4>Email</h4>
                    <p> heinwaiyanhtet20042020@gmail.com</p>
                </a>
              </div>
              {/* contact-info-item Ended */}

          </div>

    )
}
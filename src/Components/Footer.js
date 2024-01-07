import React from 'react'

export default function Footer() {
  return (
    <>
    <section className="p-3 footer-bg bg-dark">
  <div className="container">
      <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">Name
          <a href="index" className="tcs-section-click"> <img className="img-fluid" src="arkonet-logo.png"
                      alt="Arkonet logo"/>
              </a>
            <div className="footer-text">
                  <p>At ARKONET, we're more than just a digital platform – we're your trusted partner in the world of Finance and Accounting Management.</p>
                              
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="quick-link-box">
                  <h6 className="footer-title">
                      <a className="desktop-footer-section-title">Quick Links <span class="ml-5"></span></a>

                  </h6>
                  <ul className="quick-links">


                      <li className="quick-links-list">
                          <a className="quick-links-list-items  tcs-section-click" href="about-us">About ARKONET</a>
                      </li>
                      <li className="quick-links-list">
                          <a className="quick-links-list-items  tcs-section-click" href="contact-us">Contact Us</a>
                      </li>
                      <li className="quick-links-list">
                          <a className="quick-links-list-items  tcs-section-click" href="our-services">Our Services</a>
                      </li>
                      <li className="quick-links-list">
                          <a className="quick-links-list-items  tcs-section-click" href="products">Taxko</a>
                      </li>
                      <li className="quick-links-list">
                          <a className="quick-links-list-items  tcs-section-click" href="helpdesk">HelpDesk</a>
                      </li>
                      <li className="quick-links-list">
                          <a className="quick-links-list-items  tcs-section-click" href="blogs">Blogs</a>
                      </li>




                      <li className="quick-links-list">
                          <a className="quick-links-list-items  tcs-section-click" href="#">News and Updates</a>
                      </li>


                  </ul>
                  
              </div>
          </div>
        
          <div clasName="col-6 col-lg-3 col-md-3 col-sm-3 col-xs-6">
              <div className="quick-link-box">
                  <h6 className="footer-title">
                      <a className="desktop-footer-section-title">Contact Us</a>

                  </h6>
                  <ul className="quick-links">


                      <li clasNameName="quick-links-list">
                      <a href="mailto:info@arkonetglobal.com"><i className="fa fa-envelope"></i>&nbsp;&nbsp;info@arkonetglobal.com</a>
                            
                      </li>

              


                      <li className="quick-links-list">
                      <a className="quick-links-list-items tcs-section-click hover-none" href="tel:+91-9404740322">
            <i className="fa fa-mobile-phone" style={{ fontSize: '25px' }}></i>&nbsp;&nbsp;+91-9404740322
          </a>
                      </li>


                  </ul>
              </div>
              <div className="footer-social-icon">
  
  <h6 className="footer-title icon1">
                      <a className="desktop-footer-section-title">Follow us</a>

                  </h6>
  <ul className="social_icon">
  <li className="social-icn-ul-list"><a className="social-icn-item tcs-section-click"
                          href="https://www.facebook.com/arkonetglobal" target="_blank"><i
                              className="fa fa-facebook ml-5 mr-5" aria-hidden="true"></i></a>
                  </li>
                
                  <li className="social-icn-ul-list"><a className="social-icn-item tcs-section-click"
                          href="https://uk.linkedin.com/company/arkonetglobal" target="_blank"><i 
                          className="fa fa-linkedin-square ml-5 mr-5" aria-hidden="true"></i></a>
                  </li>

                  <li className="social-icn-ul-list"><a className="social-icn-item tcs-section-click"
                          href="https://instagram.com/arkonetglobal?igshid=YmMyMTA2M2Y=" target="_blank"><i
                              className="fa fa-instagram ml-5 mr-5" aria-hidden="true"></i></a>
                  </li>
                  
  </ul>
</div>
          </div>

      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">

      <h6 className="footer-title">
                      <a className="desktop-footer-section-title">Location</a>

                  </h6>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4056949935434!2d74.23990207696836!3d16.706597403866294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1012292d39783%3A0x817c1a1da55d15f6!2sARKONET%20GLOBAL!5e0!3m2!1sen!2sin!4v1698480061370!5m2!1sen!2sin"
          width="300"
          height="200"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="iframe1"
        ></iframe>
             
          </div>
      </div>

  </div>
</section>

<section className="bg-black color-white footer-padding">

    <div className="container" style={{ color: 'aliceblue' }}>
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="base-footer-pad-MV text-left-mob mt-2">
                    <span className="link-content line1"> ©2024 ARKONET. All Rights Reserved</span>
                </div>
            </div>
            <div className="col-lg-9 col-md-5 footer-menu1 col-sm-12 col-xs-12">
                <ul className="d-flex ">



                    <li className="base-footer-tcs-lnks-ul-list">
                        <a clasName="base-footer-tcs-lnks-ul-list-item tcs-section-click ml-5 mr-5" href="privacy-policy">Privacy
                            Policy</a>
                    </li>





                </ul>

            </div>

        </div>

    </div>
</section>
    </>
  )
}

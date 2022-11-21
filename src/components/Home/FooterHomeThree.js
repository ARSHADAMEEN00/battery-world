import React from "react"
import { Link } from "react-router-dom"
import { logo } from "../../assets/images/index"


function FooterHomeThree({ className }) {
  return (
    <>
      <section className={`appie-footer-area appie-footer-3-area ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget footer-about-widget-3">
                <div className="logo">
                  <Link to="#">
                    <img src={logo} alt="" height={80} />
                  </Link>
                </div>
                <p>
                  company goal
                </p>

                <div className="social mt-30">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title">Company</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Service">Service</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title">Support</h4>
                <ul>
                  <li>
                    <Link to="#">Faqs</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  <li>
                    <a href="mailto:BatteryWorld@gmail.com" >
                      <i className="fal fa-envelope" style={{ paddingTop: 4 }} /> BatteryWorld@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:6235566067">
                      <i className="fal fa-phone" style={{ paddingTop: 4 }} />+91 6235566067
                    </a>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fal fa-map-marker-alt" style={{ paddingTop: 4 }} /> Road, Chattipparamba - Kadampuzha Rd, Kottakkal, Kerala 676504
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
                footer-copyright
                d-flex
                align-items-center
                justify-content-between
                pt-35
              "
              >
                <div className="apps-download-btn">
                  {/* <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-apple" /> Download for iOS
                      </a>
                    </li>
                    <li>
                      <a className="item-2" href="#">
                        <i className="fab fa-google-play" /> Download for
                        Android
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="copyright-text">
                  <p>Copyright © {new Date().getFullYear()} Battery World. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FooterHomeThree

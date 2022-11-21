import React from "react"
import icon1 from "../../assets/images/icon/1.png"
import icon5 from "../../assets/images/icon/5.svg"
import icon6 from "../../assets/images/icon/6.svg"
import icon7 from "../../assets/images/icon/7.svg"
import useCloudinary from "../../Hooks/UseCloudinaryImage"
import { amaron_p1, exide_p1 } from "../util/CloudData"

function AboutHomeThree() {
  return (
    <>
      <section className="appie-about-3-area pt-100 pb-100" id="features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="appie-about-thumb-3 wow animated fadeInLeft"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <img src={useCloudinary(exide_p1, 'w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai')} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-traffic-title">
                <h3 className="title">
                  Exide - India's largest selling batteries
                </h3>
                <p>
                  Exide car batteries fulfil all the aforementioned purchase parameters and provide extra support and installation benefits from the comfort of your home. They have been a trusted name in this industry for more than some 100 years
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="appie-traffic-service mb-30">
                    <div className="icon">
                      <img src={icon5} alt="" />
                    </div>
                    <h5 className="title">Exhaustive Variety</h5>
                    <p>Be it an SUV, a sedan or a hatch back, Exide batteries cater to all types of vehicles.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="appie-traffic-service item-2 mb-30">
                    <div className="icon">
                      <img src={icon1} alt="" />
                    </div>
                    <h5 className="title">Reliable Warranty</h5>
                    <p>All Exide car batteries come with warranty protection that offers you hassle-free replacement in the rare occasion of battery breakdown</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="traffic-btn mt-50">
                    {/* target="_blank" */}
                    <a className="main-btn" href="https://www.exideindustries.com/">
                      Learn More <i className="fal fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="appie-traffic-title">
                <h3 className="title">Amaron - India's Top Automotive Batteries</h3>
                <p>
                  Amaron is a leading battery manufacturer in India. Available in more variants of Amaron batteries, the market giant manufactures high-performance batteries for all kinds of vehicles and models.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="appie-traffic-service mb-30 item-3">
                    <div className="icon">
                      <img src={icon6} alt="" />
                    </div>
                    <h5 className="title">Long-Lasting</h5>
                    <p>One of the unique benefits of buying an Amaron car battery is that they are exceptionally long-lasting. The secret behind Amaron battery’s long lifespan is the patented SilvenX Alloy technology.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="appie-traffic-service item-2 mb-30 item-4">
                    <div className="icon">
                      <img src={icon7} alt="" />
                    </div>
                    <h5 className="title">Highest Reserve Capacity</h5>
                    <p>Amaron batteries come with a high Reserve Capacity or RC, which is further complemented by high Cold Cranking Amps (CCA) ratings.</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="traffic-btn mt-50">
                    <a className="main-btn" href="https://www.amaron.in">
                      Learn More <i className="fal fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <img src={useCloudinary(amaron_p1, '')} alt="" />
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default AboutHomeThree

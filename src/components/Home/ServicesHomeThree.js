import React from "react"
import { battery, homeInverter, inverter, solarPanel } from "../../assets/images"

function ServicesHomeThree() {
  return (
    <>
      <section
        className="appie-service-area appie-service-3-area pt-195 pb-100"
        id="service"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Services We Provide</h3>
                <p>
                  Here we provide best solar system, home inverter and batteries
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <img src={battery} alt="" height={35} />
                </div>
                <h4 className="appie-title">Automobile Battery</h4>
                <p>Mucker plastered bugger all mate morish are.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="icon">
                  <img src={homeInverter} alt="" height={35} />
                </div>
                <h4 className="appie-title">Inverter Battery</h4>
                <p>Mucker plastered bugger all mate morish are.</p>

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-3
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="icon">
                  <img src={inverter} alt="" height={35} />
                </div>
                <h4 className="appie-title">Inverter System</h4>
                <p>Mucker plastered bugger all mate morish are.</p>

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-4
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="800ms"
              >
                <div className="icon">
                  <img src={solarPanel} alt="" height={35} />
                </div>
                <h4 className="appie-title">Solar System</h4>
                <p>Mucker plastered bugger all mate morish are.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesHomeThree

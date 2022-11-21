import React, { useState } from "react"
import { badge, customer, premium } from "../../assets/images"
import PopupVideo from "../PopupVideo"
import useCloudinary from "../../Hooks/UseCloudinaryImage"
import { service1 } from "../util/CloudData"


function FunFactHomeThree() {
  const [showVideo, setVideoValue] = useState(false)
  const handleShowVideo = e => {
    e.preventDefault()
    setVideoValue(!showVideo)
  }

  return (
    <>
      {showVideo && (
        <PopupVideo
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
          handler={e => handleShowVideo(e)}
        />
      )}
      <section className="appie-fun-fact-area" id="fun-fact-area" style={{ marginBottom: "5rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="appie-fun-fact-box wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="appie-fun-fact-content">
                      <h3 className="title">
                        Why Choose us ?
                      </h3>
                      <p>
                        Cost Effectiveness
                        Customer Relationship
                      </p>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="appie-fun-fact-item d-flex">
                            <h4 className="title">
                              <img src={customer} height={40} alt="customer" />
                            </h4>
                            <span>Customer Satisaction</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="appie-fun-fact-item d-flex">
                            <h4 className="title">
                              <img src={badge} height={40} alt="badge" />

                            </h4>
                            <span>Excellent Service</span>
                          </div>
                        </div>
                        {/* <div className="col-sm-4">
                          <div className="appie-fun-fact-item d-flex">
                            <h4 className="title">
                              <img src={badge} height={40} />

                            </h4>
                            <span>Door Step Facility</span>
                          </div>
                        </div> */}
                        <div className="col-sm-4">
                          <div className="appie-fun-fact-item d-flex">
                            <h4 className="title">
                              <img src={premium}
                                alt="premium"
                                height={40} />
                            </h4>
                            <span>Quality & Reliablity</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="appie-fun-fact-play">
                      {/* <a
                        onClick={e => handleShowVideo(e)}
                        className="appie-video-popup"
                        href="https://www.youtube.com/watch?v=EE7NqzhMDms"
                      >
                        <i className="fas fa-play" />
                      </a> */}
                      <img src={useCloudinary(service1, "w_500")}

                        alt="" style={{ borderRadius: "10px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FunFactHomeThree

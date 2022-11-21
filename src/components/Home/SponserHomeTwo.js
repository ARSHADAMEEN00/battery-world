import React from "react"
import sponserShape from "../../assets/images/sponser-shape.png"

function SponserHomeTwo({ className }) {
  return (
    <>
      <section className={`appie-sponser-area pb-100 ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">
                  Appie works best with <br />
                  your favorite platforms
                </h3>
                <p>Join over 40,000 businesses worldwide.</p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="appie-sponser-box d-flex justify-content-center">
                <div className="sponser-item">
                  <img src={""} alt="" />
                </div>
              </div>
              <div className="appie-sponser-box item-2 d-flex justify-content-center">
                <div className="sponser-item">
                  <img src={""} alt="" />
                </div>
                
              </div>
            </div>
          </div> */}
        </div>
        <div className="sponser-shape">
          <img src={sponserShape} alt="" />
        </div>
      </section>
    </>
  )
}

export default SponserHomeTwo

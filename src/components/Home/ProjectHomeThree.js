import React from "react"

function ProjectHomeThree({ className }) {
  return (
    <>
      <section className={`appie-project-3-area ${className} `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
                appie-project-3-box
                d-block d-md-flex
                justify-content-between
                align-items-center
                wow
                animated
                fadeInUp
              "
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <h4 className="title">
                  Having trouble starting your car <br /> due to a damaged battery?
                </h4>
                <div className="text-center">
                  <a className="main-btn mb-2" href="tel:6235566067">
                    REQUEST A CALLBACK!
                  </a>
                  <p className="text-white" style={{ fontSize: "12px" }}>
                    Our Customer Executive will call you within 24 Hrs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectHomeThree

import React from "react"
import { Link } from "react-router-dom"
import useCloudinary from "../../Hooks/UseCloudinaryImage"
import { solar1, solar2 } from "../util/CloudData"

function DownloadHomeThree({ className }) {
  return (
    <>
      <section
        className={`appie-download-3-area pt-100 ${className || ""}`}
        id="download"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Solar System</h3>
                {/* <p >STILL LIVING UNDER THE BURDEN OF HIGH ELECTRICITY BILL?<br />
                  SAVE ON BILLS BY CHOOSEING SOLAR</p> */}
                <p >Still living under the burden of high electricity bills?<br /> Save on bills by choosing solar</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="appie-download-3-box mt-30 mr-20 wow animated fadeInLeft"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="content">
                  <h4 className="title">Android</h4>
                  <p>Download app for Android today — it's free.</p>
                  <Link className="main-btn" to="#">
                    <i className="fab fa-google-play" />
                    Book Now
                  </Link>
                </div>
                <div className="thumb text-center p-4">
                  <img src={useCloudinary(solar1, '')} alt="" width={430} height={280} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-download-3-box mt-30 ml-20 wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="content">
                  <h4 className="title">iOS & iPadOS</h4>
                  <p>Download app for iOS today — it's free.</p>
                  <Link className="main-btn main-btn-2" to="#">
                    <i className="fab fa-apple" />
                    Download for iOS
                  </Link>
                </div>
                <div className="thumb text-center p-4">
                  <img src={useCloudinary(solar2, '')} alt="" width={430} height={280} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DownloadHomeThree

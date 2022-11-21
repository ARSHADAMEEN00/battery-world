import React, { useState } from "react"
import { heroBanner } from "../../assets/images"
import useCloudinary from "../../Hooks/UseCloudinaryImage"
import PopupVideo from "../PopupVideo"
import { homeBanner } from "../util/CloudData"

function HeroHomeThree() {
  const [showVideo, setVideoValue] = useState(false)
  const handleShowVideo = e => {
    e.preventDefault()
    setVideoValue(!showVideo)
  }
  const cloudLink = 'https://res.cloudinary.com/osperb/video/upload/v1668844394/BatteryWorld/Batteries_Manufacturing_Setup.mp4'
  return (
    <>
      {showVideo && (
        <PopupVideo
          videoSrc={cloudLink}
          handler={e => handleShowVideo(e)}
        />
      )}
      <section className="appie-hero-area appie-hero-3-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="appie-hero-content text-center">
                <h1 className="appie-title">
                  Better battery for the best journey
                </h1>
                <p>
                  INVERTER, BATTERY & SOLAR SYSTEM{" "}
                  <br />
                  SALES & SERVICE
                </p>
                <div className="hero-btns">
                  <a className="main-btn" href="#">
                    Learn more
                  </a>
                  <a
                    onClick={e => handleShowVideo(e)}
                    className="appie-video-popup"
                    href={'#!'}
                  >
                    <i className="fas fa-play" /> Play Video
                  </a>
                </div>
                <div
                  className="thumb mt-100 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="400ms"
                >
                  <img src={useCloudinary(homeBanner, 'w_1200')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroHomeThree

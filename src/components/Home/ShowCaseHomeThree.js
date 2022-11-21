import React, { useRef } from "react"
import Slider from "react-slick"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import shape12 from "../../assets/images/shape/shape-12.png"
import shape13 from "../../assets/images/shape/shape-13.png"
import shape14 from "../../assets/images/shape/shape-14.png"
import shape15 from "../../assets/images/shape/shape-15.png"
import useCloudinary from "../../Hooks/UseCloudinaryImage"
import { amaron_p1, amaron_p2, exide_p1, exide_p2, nduron_p1 } from "../util/CloudData"

function ShowCaseHomeThree() {
  const sliderRef = useRef()
  // const sliderNext = () => {
  //     sliderRef.current.slickNext();
  // };
  // const sliderPrev = () => {
  //     sliderRef.current.slickPrev();
  // };
  const settings = {

    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className="appie-showcase-area">
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="appie-section-title text-center">
                    <h3 className="appie-title">Top Trending Products</h3>
                    <p>The app provides design and digital marketing.</p>
                  </div>
                </div>
              </div>
              <div className="row appie-showcase-slider">
                <div className="col-lg-12">
                  <Slider ref={sliderRef} {...settings}>
                    <div>
                      <div className="appie-showcase-item mt-30">
                        <a className="appie-image-popup">
                          <img src={useCloudinary(nduron_p1, 'e_improve,w_300,h_550')} alt="" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="appie-showcase-item mt-30">
                        <a className="appie-image-popup">
                          <img src={useCloudinary(amaron_p2, 'e_improve,w_300,h_550')} alt="" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="appie-showcase-item mt-30">
                        <a className="appie-image-popup">
                          <img src={useCloudinary(exide_p2, 'e_improve,w_300,h_550')} alt="" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="appie-showcase-item mt-30">
                        <a className="appie-image-popup">
                          <img src={useCloudinary(amaron_p1, 'e_improve,w_300,h_550')} alt="" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="appie-showcase-item mt-30">
                        <a className="appie-image-popup">
                          <img src={useCloudinary(exide_p1, 'e_improve,w_300,h_550')} alt="" />
                        </a>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="showcase-shape-1">
              <img src={shape14} alt="" />
            </div>
            <div className="showcase-shape-2">
              <img src={shape13} alt="" />
            </div>
            <div className="showcase-shape-3">
              <img src={shape12} alt="" />
            </div>
            <div className="showcase-shape-4">
              <img src={shape15} alt="" />
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </section>
    </>
  )
}

export default ShowCaseHomeThree

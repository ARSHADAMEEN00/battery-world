import React, { useState } from "react"
import { Link } from "react-router-dom"

function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px")
  const [item, setItem] = useState("home")
  const handler = (e, value) => {
    e.preventDefault()
    const getItems = document.querySelectorAll(`#${value} li`).length
    if (getItems > 0) {
      setSize(`${43 * getItems}px`)
      setItem(value)
    }
  }
  return (
    <>
      <div
        onClick={e => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <Link to="#" onClick={e => action(e)}>
                    <i className="fa fa-times"></i>
                  </Link>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  {/* <img src={logo} alt="" /> */}
                  <span style={{ color: "white" }}>Battery World (logo)</span>

                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={e => handler(e, "home")}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      Home

                    </li>
                    <li
                      onClick={e => handler(e, "service")}
                      id="service"
                      className="menu-item-has-children active"
                    >
                      <Link to="/service">Service</Link>
                    </li>
                    <li
                      onClick={e => handler(e, "pages")}
                      id="pages"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link to="#">Pages</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "pages" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link to="/about-us">About Us</Link>
                        </li>

                        <li>
                          <Link to="/error">Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={e => handler(e, "news")}
                      id="news"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link to="#">News</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "news" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link to="/news">news page</Link>
                        </li>
                        <li>
                          <Link to="/news/single-news">Single News</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={e => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <Link to="$">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="$">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="$">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="$">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fal fa-envelope"></i> support@appie.com
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fal fa-phone"></i> +(642) 342 762 44
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fal fa-map-marker-alt"></i> 442 Belle
                        Terre St Floor 7, San Francisco, AV 4206
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer

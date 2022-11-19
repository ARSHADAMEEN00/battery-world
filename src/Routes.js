import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Error from "./components/Error"
import Loader from "./components/Helper/Loader"
import ScrollToTop from "./components/Helper/ScrollToTop"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Service from "./pages/Service"

function Routes() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? "active" : ""}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? "active" : ""}`}>
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/service" component={Service} />
                            <Route exact path="/about-us" component={AboutUs} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/error" component={Error} />
                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    )
}

export default Routes

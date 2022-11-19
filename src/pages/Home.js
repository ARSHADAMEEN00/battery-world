import React from "react"
import BackToTop from "../components/BackToTop"
import AboutHomeThree from "../components/Home/AboutHomeThree"
import BlogHomeThree from "../components/Home/BlogHomeThree"
import DownloadHomeThree from "../components/Home/DownloadHomeThree"
import FooterHomeThree from "../components/Home/FooterHomeThree"
import FunFactHomeThree from "../components/Home/FunFactHomeThree"
import HeaderHomeThree from "../components/Home/HeaderHomeThree"
import HeroHomeThree from "../components/Home/HeroHomeThree"
import ProjectHomeThree from "../components/Home/ProjectHomeThree"
import ServicesHomeThree from "../components/Home/ServicesHomeThree"
import ShowCaseHomeThree from "../components/Home/ShowCaseHomeThree"
import Drawer from "../components/Mobile/Drawer"
import useToggle from "../Hooks/useToggle"

function Home() {
    const [drawer, drawerAction] = useToggle(false)
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroHomeThree />
            <ServicesHomeThree />
            <FunFactHomeThree />
            <AboutHomeThree />
            <ShowCaseHomeThree />
            <DownloadHomeThree />
            <BlogHomeThree />
            <ProjectHomeThree />
            <FooterHomeThree />
            <BackToTop className="back-to-top-3" />
        </>
    )
}

export default Home

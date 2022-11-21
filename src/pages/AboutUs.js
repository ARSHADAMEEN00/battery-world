import React from 'react'
import HeroAbout from '../components/AboutUs/HeroAbout'
import ServicesAbout from '../components/AboutUs/ServicesAbout'
import BackToTop from '../components/BackToTop'
import SponserHomeTwo from '../components/Home/SponserHomeTwo'
import Drawer from '../components/Mobile/Drawer'
import SignupHomeEight from "../components/Home/SignupHomeEight"
import useToggle from '../Hooks/useToggle'
import HeaderHomeThree from '../components/Home/HeaderHomeThree'
import FooterHomeThree from '../components/Home/FooterHomeThree'

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false)
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroAbout />
            <ServicesAbout />
            <SponserHomeTwo />
            <SignupHomeEight />
            <FooterHomeThree className="appie-footer-about-area" />
            <BackToTop />
        </>
    )
}

export default AboutUs
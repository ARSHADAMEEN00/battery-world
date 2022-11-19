import React from 'react'
import HeaderAbout from '../components/AboutUs/HeaderAbout'
import HeroAbout from '../components/AboutUs/HeroAbout'
import ServicesAbout from '../components/AboutUs/ServicesAbout'
import TeamAbout from '../components/AboutUs/TeamAbout'
import BackToTop from '../components/BackToTop'
import FooterHomeOne from '../components/Home/FooterHomeOne'
import SponserHomeTwo from '../components/Home/SponserHomeTwo'
import Drawer from '../components/Mobile/Drawer'
import SignupHomeEight from "../components/Home/SignupHomeEight"
import useToggle from '../Hooks/useToggle'

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false)
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderAbout drawer={drawer} action={drawerAction.toggle} />
            <HeroAbout />
            <ServicesAbout />
            <TeamAbout />
            <SponserHomeTwo />
            <SignupHomeEight />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    )
}

export default AboutUs
import React, { useEffect } from 'react'
import BackToTop from '../components/BackToTop'
import FooterHomeOne from '../components/Home/FooterHomeOne'
import ProjectHomeOne from '../components/Home/ProjectHomeOne'
import Drawer from '../components/Mobile/Drawer'
import DetailsService from '../components/Service/DetailsService'
import HeaderService from '../components/Service/HeaderService'
import HeroService from '../components/Service/HeroService'
import useToggle from '../Hooks/useToggle'
import StickyMenu from '../lib/StickyMenu'

function Service() {
    useEffect(() => {
        StickyMenu()
    })
    const [drawer, drawerAction] = useToggle(false)
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderService action={drawerAction.toggle} />
            <HeroService />
            <DetailsService />
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    )
}

export default Service
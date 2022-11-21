import React, { useEffect } from 'react'
import BackToTop from '../components/BackToTop'
import FooterHomeThree from '../components/Home/FooterHomeThree'
import HeaderHomeThree from '../components/Home/HeaderHomeThree'
import ProjectHomeOne from '../components/Home/ProjectHomeOne'
import Drawer from '../components/Mobile/Drawer'
import DetailsService from '../components/Service/DetailsService'
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
            <HeaderHomeThree action={drawerAction.toggle} />
            <HeroService />
            <DetailsService />
            <ProjectHomeOne />
            <FooterHomeThree />
            <BackToTop />
        </>
    )
}

export default Service
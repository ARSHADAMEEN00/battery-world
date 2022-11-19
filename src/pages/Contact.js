import React from 'react'
import BackToTop from '../components/BackToTop'
import Forms from '../components/Contact/Forms'
import HeaderNews from '../components/Contact/HeaderNews'
import HeroNews from '../components/Contact/HeroNews'
import FooterHomeOne from '../components/Home/FooterHomeOne'
import Drawer from '../components/Mobile/Drawer'
import useToggle from '../Hooks/useToggle'

function Contact() {
    const [drawer, drawerAction] = useToggle(false)
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Blogs"
                breadcrumb={[
                    { link: "/", title: "home" },
                    { link: "/news", title: "Blogs" },
                ]}
            />
            <Forms />
            <FooterHomeOne />
            <BackToTop />
        </>
    )
}

export default Contact
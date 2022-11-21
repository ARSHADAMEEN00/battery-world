import React from 'react'
import BackToTop from '../components/BackToTop'
import Forms from '../components/Contact/Forms'
import HeroNews from '../components/Contact/HeroNews'
import FooterHomeThree from '../components/Home/FooterHomeThree'
import HeaderHomeThree from '../components/Home/HeaderHomeThree'
import Drawer from '../components/Mobile/Drawer'
import useToggle from '../Hooks/useToggle'

function Contact() {
    const [drawer, drawerAction] = useToggle(false)
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />

            <HeroNews
                title="Blogs"
                breadcrumb={[
                    { link: "/", title: "home" },
                    { link: "/news", title: "Blogs" },
                ]}
            />
            <Forms />
            <FooterHomeThree />
            <BackToTop />
        </>
    )
}

export default Contact
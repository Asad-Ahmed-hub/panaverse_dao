import Image from 'next/image'

import styles from './page.module.css'
import NavMenu from './components/NavMenu'
import HeroBanner from './components/HeroBanner'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Sponsers from './components/Sponsers'
import Course from './components/Course'
import Practice from './components/Practice'
import Graduation from './components/Graduation'
import OurTeam from './components/OurTeam'



export default function Home() {
  return (
      <>
        <HeroBanner />
        <AboutSection/>
        <Practice />
        <Course />
        <Graduation />
        <OurTeam />
        <Sponsers />
      </>
  )
}

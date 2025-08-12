import React from 'react'
import Hero from './sections/Hero'
import ShowCastSection from './sections/ShowCastSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperinceSection from './sections/ExperinceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero />
   <ShowCastSection/>
   <LogoSection/>
   <FeatureCards/>
   <ExperinceSection/>
   <TechStack/>
   <Testimonials/>
   <Contact/>
   <Footer/>

   
   </>
  )
}
export default App

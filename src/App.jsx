import React from 'react'
import Hero from './sections/Hero'
import ShowCastSection from './sections/ShowCastSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperinceSection from './sections/ExperinceSection'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero />
   <ShowCastSection/>
   <LogoSection/>
   <FeatureCards/>
   <ExperinceSection/>
   
   </>
  )
}
export default App

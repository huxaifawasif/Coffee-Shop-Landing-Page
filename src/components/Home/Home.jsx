import HeroSection from './HeroSection'
import { Homesection2 } from './Homesection2'
import FrameSequenceBackground from '../ui/FrameSequenceBackground'
import Navbar from '../Navbar'
import Homesection3 from '../Home/Homesection3'
import Footer from './Footer'
function Home() {
  return (
   
   <>
   <FrameSequenceBackground>
      <Navbar />
      <HeroSection />
      <Homesection2 />
      <Homesection3 />
    </FrameSequenceBackground>
    <div className="relative z-20 bg-black">
      <Footer />
    </div>
    </>
  )
}

export default Home

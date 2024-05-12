import React from 'react'
import HeroPage from '../components/HeroPage'
import About from '../components/About'
import Services from './Services'
import Feature from './Feature'
import Vision from './Vision'
import OurBlogs from '../components/OurBlogs'
import IconContainer from '../components/IconContainer'
import FAQSection from './FAQ'
import Footer from './Footer'
import ContactPage from './ContactPage'
import ByNumber from '../components/ByNumber'
import NumberCount from './NumberCount'
import {motion} from "framer-motion" ;
import img from "../assets/groupImg.png"
import MovingCards from '../components/MovingLogo'
const Home = () => {
  const transition = {typr : "spring", duration : 3}
  return (
    <div>
      
       <HeroPage/>
       <About/>
      <Services/>
      <Feature/>
      <Vision/>
      <OurBlogs/>
      <ContactPage/>
      <MovingCards/>
      <NumberCount/>
      <FAQSection/>
      <Footer/>
      
    </div>
  )
}

export default Home

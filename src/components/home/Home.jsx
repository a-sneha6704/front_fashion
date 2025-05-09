import React from "react"
import  AboutUs  from "../pages/AboutUs" 
import  Contact  from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Shop } from "../pages/Shop"
import { StyleTips } from "../pages/StyleTips"
import { LifeStyle } from "../pages/LifeStyle"
import { Hero } from "./Hero"
import Footer from "../common/Footer" 
import { Content } from "../pages/Content"
import { Photos } from "../pages/Photos"

export const Home = () => {
  return (
    <>
      <Hero />
      {/* <StyleTips /> */}
      <Content/>
      <Counter /> 
      <Photos/>
      <AboutUs /> 
      <Contact />
      <Footer/>

    </>
  )
}

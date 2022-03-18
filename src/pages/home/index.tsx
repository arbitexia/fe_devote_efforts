import React from 'react'

import {
  Services,
  Clients,
  Hero,
  About,
  OurProject,
  Technologies,
  OurClients,
  SuccessfulStory,
} from '../../components/home'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function HomeContainer() {
  console.log('HomePage')
  gsap.registerPlugin(ScrollTrigger)
  const timeline = gsap.timeline({})

  return (
    <main>
      <Hero timeline={timeline} />
      <Clients />
      <Services />
      <OurProject />
      <Technologies />
      <About />
      <OurClients />
      <SuccessfulStory />
    </main>
  )
}

export default HomeContainer

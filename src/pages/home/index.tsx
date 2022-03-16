import React from 'react'
import Services from '../../components/home/services'
import Clients from '../../components/home/clients'
import Hero from '../../components/home/hero'
import About from '../../components/home/about'
import OurProject from '../../components/home/ourprojects'
import Technologies from '../../components/home/technologies'
import OurClients from '../../components/home/ourclients'
import SuccessfulStory from '../../components/home/successfulstory'

function HomeContainer() {
  return (
    <main>
      <Hero />
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

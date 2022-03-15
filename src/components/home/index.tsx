import React from 'react'
import Services from '../services'
import Clients from '../clients'
import Hero from '../hero'
import About from '../about'
import OurProject from '../ourprojects'
import Technologies from '../technologies'
import OurClients from '../ourclients'
import SuccessfulStory from '../successfulstory'

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

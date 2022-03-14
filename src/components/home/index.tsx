import React from 'react'
import Services from '../services'
import Clients from '../clients'
import Hero from '../hero'
import OurProject from '../ourprojects'
import Technologies from '../technologies'

function HomeContainer() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <OurProject />
      <Technologies />
    </main>
  )
}

export default HomeContainer

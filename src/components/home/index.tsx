import React from 'react'
import Services from '../services'
import Clients from '../clients'
import Hero from '../hero'
import OurProject from '../ourprojects'

function HomeContainer() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <OurProject />
    </main>
  )
}

export default HomeContainer

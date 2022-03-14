import React from 'react'
import Services from '../services'
import Clients from '../clients'
import Hero from '../hero'

function HomeContainer() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
    </main>
  )
}

export default HomeContainer

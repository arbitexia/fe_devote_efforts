import React from 'react'
import Services from '../services'
import Clients from '../clients'
import Hero from '../hero'
import About from '../about'

function HomeContainer() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <About />
    </main>
  )
}

export default HomeContainer

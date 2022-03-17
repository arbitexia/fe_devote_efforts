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

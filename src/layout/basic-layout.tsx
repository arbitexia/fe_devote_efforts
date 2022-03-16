import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const BasicLayout = ({ children: Component }) => {
  return (
    <div>
      <Navbar />
      <div>{Component}</div>
      <Footer />
    </div>
  )
}

export default BasicLayout

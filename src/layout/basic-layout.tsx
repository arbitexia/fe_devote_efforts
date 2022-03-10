import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const BasicLayout = (props) => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default BasicLayout

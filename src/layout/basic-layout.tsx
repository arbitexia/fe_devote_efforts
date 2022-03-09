import React from 'react'
import Navbar from '../components/navbar'

const BasicLayout = (props) => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  )
}

export default BasicLayout

import React from 'react'
import ManageArea from './ManageArea'
import ResultArea from './ResultArea'
import logo from '../assets/images/logo.svg'
function MainScreen() {
  return (
    <div className="main-screen">
        <img src={logo} alt="" />
        <div className="content">
    <ManageArea/>
    <ResultArea/>
        </div>
    </div>
  )
}

export default MainScreen
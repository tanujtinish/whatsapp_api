import React from 'react'
import AIRTEL_LOGO from '../assets/images/airtel_x_labs.jpeg'
import AIRTEL_LOGO2 from '../assets/images/airtel_x_labs2.png'
import './header.scss'

const Header = () => {
  return (
    <header className="header-wrapper">
    	<div className="container">
    		<img src={AIRTEL_LOGO} alt="HDFC LOGO" />
    	</div>
    </header>
  )
}

export default Header

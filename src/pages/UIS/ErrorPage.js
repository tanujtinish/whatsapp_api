import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../../assets/css/ErrorPage.scss'
import AIRTEL_LOGO from '../../assets/images/airtel_x_labs.jpeg'
import AIRTEL_LOGO2 from '../../assets/images/airtel_x_labs2.png'
import { Header } from '../../components/'

import { connect } from 'react-redux';
import{sendMessage} from "./../../actions/WhatsappFormActions";

// import PhoneInput from 'react-phone-number-input'

class ErrorPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render() {
    
    return (
      <div className="user-detail-page-scroll">
        <div className="user-detail-page">
          <header className="header-wrapper">
            <div className="img-left" onClick={()=>{this.props.history.push("")}}>
              <img src={AIRTEL_LOGO} alt="AIRTEL LOGO" />
              <div className="img-left-text"> 
                Airtel X
                <span className="inner-text">
                  Labs
                </span>
              </div>
            </div>
          </header>
          <section className="banner">
            <h3 className="banner-text">ENTER DETAILS TO SEND WHATSAPP MESSAGE</h3>
          </section>
          <section className="data-input-wrapper">
            <div className="data-input-card">
              <form style={{height:"100%"}}>
                <div className="input-wrapper">
                  <p>
                      PAGE NOT FOUND. CLICK TO GO TO <Link to={"/wa-poc/"} activeClassName="active">HOME</Link> PAGE
                  </p>
                </div>
              </form>
            </div>
           
            
          </section>
        </div>
      </div>
    )
  }
}

export default ErrorPage;
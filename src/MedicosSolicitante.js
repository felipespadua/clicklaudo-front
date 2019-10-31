import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTableMedicosSolicitante from './MainTableMedicosSolicitante'
import Navbar from './Navbar'
import Footer from './Footer'

class MedicosSolicitante extends Component {
  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  render(){
    return (
          <div>
            <Router>
              <div id="main"></div>
              <Navbar/>
                <MainTableMedicosSolicitante/>
              <Footer/>
            </Router> 
      </div>
    )
  }
}

export default MedicosSolicitante
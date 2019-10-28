import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTableMedicosSolicitante from './MainTableMedicosSolicitante'
import NavBar from './NavBar'
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
              <NavBar/>
                <MainTableMedicosSolicitante/>
              <Footer/>
            </Router> 
      </div>
    )
  }
}

export default MedicosSolicitante
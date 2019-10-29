import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTableMedicos from './MainTableMedicos'
import Navbar from './Navbar'
import Footer from './Footer'

class Medicos extends Component {
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
                <MainTableMedicos/>
              <Footer/>
            </Router> 
      </div>
    )
  }
}

export default Medicos
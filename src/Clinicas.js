import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTableClinicas from './MainTableClinicas'
import NavBar from './NavBar'
import Footer from './Footer'

class Clinicas extends Component {
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
                <MainTableClinicas/>
              <Footer/>
            </Router> 
      </div>
    )
  }
}

export default Clinicas
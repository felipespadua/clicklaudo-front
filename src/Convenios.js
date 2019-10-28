import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTableConvenios from './MainTableConvenios.js'
import NavBar from './NavBar'
import Footer from './Footer'

class Convenios extends Component {
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
     
              <MainTableConvenios/>

          

              <Footer/>
            </Router> 
      </div>
    )
  }
}

export default Convenios
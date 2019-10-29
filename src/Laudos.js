import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTable from './MainTable'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'

class Laudos extends Component {
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
                <MainTable/>
                <Footer/>
            </Router> 
      </div>
    )
  }
}

  export default Laudos
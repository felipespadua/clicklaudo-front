import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import HistoricoProstataForm from './HistoricoProstataForm'
import Navbar from './Navbar'
import Footer from './Footer'

class Historico extends Component {
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
                <HistoricoProstataForm/>
                <Footer/>
            </Router> 
      </div>
    )
  }
}

  export default Historico
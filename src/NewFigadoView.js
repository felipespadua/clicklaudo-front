import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import FigadoForm from './FigadoForm';

class NewFigadoView extends Component {
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
                <FigadoForm/>
                <Footer/>
            </Router> 
      </div>
    )
  }
}

  export default NewFigadoView

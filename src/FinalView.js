import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import FinalForm from './FinalForm';

class FinalView extends Component {
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
                <FinalForm {...this.props}/>
                <Footer/>
            </Router> 
      </div>
    )
  }
}

  export default FinalView

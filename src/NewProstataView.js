import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import ProstataForm from './ProstataForm';

class NewProstataView extends Component {
  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  render(){
    console.log(this.props)
    return (
          <div>
            <Router>
              <div id="main"></div>
              <Navbar/>
                <ProstataForm rest={this.props}/>
                <Footer/>
            </Router> 
      </div>
    )
  }
}

  export default NewProstataView

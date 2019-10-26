import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTable from './MainTable'
import NavBar from './NavBar'

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
              <NavBar/>
              <MainTable/>
            </Router> 
      </div>
    )
  }
}

  export default Laudos
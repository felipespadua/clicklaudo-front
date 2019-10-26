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
        <div className="row container-fluid">
          <div className="col-2">
          </div>
          <div className="col-8  mt-5">
            <Router>
              <NavBar/>
              <MainTable/>
            </Router>
          </div>
          <div className="col-2"></div>         
      </div>
    )
  }
}

  export default Laudos
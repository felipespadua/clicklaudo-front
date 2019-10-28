import React, {Component} from 'react';
import SignInSide from './SignInSide'
// import MainTable from './MainTable'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  
  render(){ 
    return (
      <div>
        <SignInSide/>
      </div>
    )
  }
}

export default Login
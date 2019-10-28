import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link,Redirect } from 'react-router-dom';
import SignInSide from './SignInSide';

class Login extends Component {
  constructor(props){
    super(props);
 
   
  }

     render(){
    return(
    
      <div>
          <SignInSide/>
     
      </div>
    )
  }
}

export default Login;
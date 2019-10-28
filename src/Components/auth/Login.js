import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link,Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
   
  }

  handleFormSubmit = (event) => {
    console.log(this.props, "===>")
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        console.log(response)
        this.props.getUser(response)
        this.props.history.push("/laudos")
        
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
        </form>
        <p>Don't have account? 
            <Link to={"/cadastro"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default Login;
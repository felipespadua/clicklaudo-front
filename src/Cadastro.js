import React, {Component} from 'react'
import SignUp from './SignUp.js'

class Cadastro extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){ 
    return (
      <div>
        <SignUp/>
      </div>
    )
  }
}

export default Cadastro
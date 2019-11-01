import React, {Component} from 'react'



class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
    
    }
  }

  
  render() {
    return (
      <div>
<footer className="bg-dark text-white">
    <div className="container py-4 mx--74 ">
      <div className="row">
        <div className="col">
          
          <ul className="list-unstyled">
          </ul>
          <h4 className="h6">DADOS DE CONTATO</h4>
          <ul className="list-unstyled text-secondary">
             <strong style={{color: 'white'}}>email:</strong> contato@onreport.com.br <strong style={{color: 'white'}}>contato:</strong> 11 99999-9999 <strong style={{color: "white"}}>aberto:</strong> de seg. à Sexta das 8hrs às 18hrs
          <p style={{color: "white"}}>Copyright © OnReport 2019</p>
          </ul>
        </div>
       
  
      </div>
    </div>
  </footer>
  </div>
    )
  };
}

export default Footer 





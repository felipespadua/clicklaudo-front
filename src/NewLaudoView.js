// import React from "react";
// // import logo from "./logo.svg";
// import "./App.css";
// import GeneralForm from "./GeneralForm";
// import FigadoForm from "./FigadoForm";
// import ProstataForm from "./ProstataForm";

// import { BrowserRouter as Router } from "react-router-dom";
// import NavBar from './Navbar'
// import Footer from './Footer'

// import Button from '@material-ui/core/Button';
// import Grid from "@material-ui/core/Grid";

// class NewLaudoView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: "General"
//     };
//     this.showGeneral = this.showGeneral.bind(this);
//     this.showFigado = this.showFigado.bind(this);
//     this.showProstata = this.showProstata.bind(this);
//   }
//   showGeneral() {
//     this.setState({
//       show: "General"
//     });
//   }

//   showFigado() {
//     this.setState({
//       show: "Figado"
//     });
//   }

//   showProstata() {
//     this.setState({
//       show:  "Prostata"
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/>
//         <Grid>

//       <div className="App">
//           <Button
//             type="submit" 
//             // fullWidth
//             variant="contained"
//             color="primary"
//             onClick={this.showGeneral}
//           >
//             General
//           </Button>
//           <Button
//             type="submit" 
//             // fullWidth
//             variant="contained"
//             color="primary"
//             onClick={this.showFigado}
//           >
//             Figado
//           </Button>
//           <Button
//             type="submit" 
//             // fullWidth
//             variant="contained"
//             color="primary"
//             onClick={this.showProstata}
//           >
//             Prostata
//           </Button>

          
//         {this.state.show === "General" && <GeneralForm />}
//         {this.state.show === "Figado" && <FigadoForm />}
//         {this.state.show === "Prostata" && <ProstataForm />}

//       </div>
//         </Grid>
//           <Footer/>
//         </Router>
//       </div>
//     );
//   }
// }

// export default NewLaudoView;

import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import GeneralForm from './GeneralForm';

class NewLaudoView extends Component {
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
                <GeneralForm rest={this.props}/>
                <Footer/>
            </Router> 
      </div>
    )
  }
}

  export default NewLaudoView

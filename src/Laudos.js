import React, {Component} from 'react'
// import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import Fab from '@material-ui/core/Fab';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

class Laudos extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){
    return (
        <div className="row bg-white container-fluid">
          <div className="col-2"></div>
          <div className="col-8">
          {/* <a href="/"><img className="mt-5 logo" src="/img/Logo.svg"/></a> */}
              <h4 className="mt-4 mb-5 text-secondary">Laudos</h4>
              <TextField className="mb-5 mt-2" 
                id="standard-name"
                value={this.state.search}
                onChange={this.handleChange('search')}
                fullWidth="true"
                type="text"
                margin="normal"
                placeholder="Procurar "
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon/>
                    </InputAdornment>
                  ),
                }}
              />


          <div className="row m-list bg-light rounded-top box-shadow rounded-botton-0">
            <div className="col-2 d-flex justify-content-start">
              <p>ID: 22678</p>
            </div>
          </div>
          <div className="row m-list mb-2 bg-light box-shadow rounded-top-0 rounded-botton pb-2 ">
            <div className="col-2 d-flex justify-content-start">
              <p>Exame</p>
            </div>
            <div className="col-6 d-flex justify-content-start">
            <div></div>
              <p>Paciente</p>
            </div>
            </div>
            <div className="row box-shadow m-list mb-2 bg-light rounded">
              <div className="col-2 d-flex justify-content-start align-items-center">
                <p>23452</p>
              </div>
              <div className="col-6 d-flex justify-content-start align-items-center">
              <div></div>
                <p>Rafael Sousa Dias</p>
              </div>
            </div>
            <div className="row box-shadow m-list mb-2 bg-light rounded">
              <div className="col-2 d-flex justify-content-start align-items-center">
                <p>23452</p>
              </div>
              <div className="col-6 d-flex justify-content-start align-items-center">
              <div></div>
                <p>Joaqui da Silva</p>
              </div>
            </div>
            <div className="row box-shadow m-list mb-2 bg-light rounded">
              <div className="col-2 d-flex justify-content-start align-items-center">
                <p>23452</p>
              </div>
              <div className="col-6 d-flex justify-content-start align-items-center">
              <div></div>
                <p>Joaqui da Silva</p>
              </div>
            </div>
            <div className="row box-shadow m-list mb-2 bg-light rounded">
              <div className="col-2 d-flex justify-content-start align-items-center">
                <p>23452</p>
              </div>
              <div className="col-6 d-flex justify-content-start align-items-center">
              <div></div>
                <p>Joaqui da Silva</p>
              </div>
            </div>
            <div className="row box-shadow m-list mb-2 bg-light rounded">
              <div className="col-2 d-flex justify-content-start align-items-center">
                <p>23452</p>
              </div>
              <div className="col-6 d-flex justify-content-start align-items-center">
              <div></div>
                <p>Joaqui da Silva</p>
              </div>
            </div>
            <div className="row box-shadow m-list mb-2 bg-light rounded">
              <div className="col-2 d-flex justify-content-start align-items-center">
                <p>23452</p>
              </div>
              <div className="col-6 d-flex justify-content-start align-items-center">
              <div></div>
                <p>Joaqui da Silva</p>
              </div>
            </div>
            <div className="row box-shadow m-list mb-2 bg-light rounded">
              <div className="col-2 d-flex justify-content-start align-items-center">
                <p>23452</p>
              </div>
              <div className="col-6 d-flex justify-content-start align-items-center">
              <div></div>
                <p>Joaqui da Silva</p>
              </div>
            </div>
          </div>
          <div className="col-2"></div>         
      </div>
    )
  }
}

  export default Laudos
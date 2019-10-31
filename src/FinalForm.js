import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./FinalForm.css";
import Button from "@material-ui/core/Button";

class FinalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observacoes: "",
      conclusoes: ""
    };
    this.typeControl = {
      text: ["observacoes", "conclusoes"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBySpeech = this.handleChangeBySpeech.bind(this);
  }

  handleChange = name => event => {
    console.log(event.target);
    if (event.target.type === "checkbox") {
      this.setState({ ...this.state, [name]: event.target.checked });
    } else {
      this.setState({ ...this.state, [name]: event.target.value });
    }
  };

  handleChangeBySpeech = name => {
    let checkBoxes = this.typeControl.checkBox;
    let texts = this.typeControl.text;
    let selects = this.typeControl.selects;
    if (checkBoxes.includes(name)) {
      this.setState({ ...this.state, [name]: !this.state.name });
    }
  };

  handleChangeSelect = name => event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.setState({
      observacoes: "",
      conclusoes: ""
    });
  }

  render() {
    return (
      <div className="mainDivGF">
        <form onSubmit={this.handleSubmit}>
          <table className="tableSize">
            <thead>
              <tr>
                <td>
                  <h2>Conclusões</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="">Observações:</label>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    fullWidth
                    multiline
                    margin="dense"
                    variant="outlined"
                    value={this.state.observacoes}
                    onChange={this.handleChange("observacoes")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">Conclusões:</label>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    fullWidth
                    multiline
                    margin="dense"
                    variant="outlined"
                    value={this.state.conclusoes}
                    onChange={this.handleChange("conclusoes")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    );
  }
}

export default FinalForm;

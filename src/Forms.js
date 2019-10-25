import React, { Component } from "react";
// import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

class TheForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      checkedA: false,
      checkedB: false,
      checkedC: true
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  handleSubmit(event) {
    alert(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("value")}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange("checkedA")}
              value="checkedA"
            />
          }
          label="Secondary"
        />

        <Switch
          checked={this.state.checkedC}
          onChange={this.handleChange("checkedC")}
          value="checkedC"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        <Switch
          checked={this.state.checkedB}
          onChange={this.handleChange("checkedB")}
          value="checkedB"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />

        <button type="submit">Submit Laudo</button>
      </form>
    );
  }
}

export default TheForms;

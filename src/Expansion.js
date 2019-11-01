import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import FigadoForm from "./FigadoForm";
import General from "./GeneralForm";
import ProstataForm from "./ProstataForm";
import FinalForm from "./FinalForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>General Info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <General />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* --------------------------------------------------------------------------------------- */}
      <ExpansionPanel>
        <ExpansionPanelSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Laudo Figado</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FigadoForm />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* --------------------------------------------------------------------------------------- */}

      <ExpansionPanel>
        <ExpansionPanelSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Laudo Prostata</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ProstataForm />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Final</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FinalForm />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

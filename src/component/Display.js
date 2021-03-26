import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./Display.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <Container maxWidth="sm" >
      <Grid container spacing={12} className={useStyles.margen}>
      <div id="outlined-basic" fullWidth variant="outlined" className="component-display">
        <div>{this.props.value}</div>
      </div>
      </Grid>
      </Container>
    );
  }
}
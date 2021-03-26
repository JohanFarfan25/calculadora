import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

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
      
      <div id="outlined-basic" fullWidth className="component-display">
        <div>{this.props.value}</div>
      </div>

    );
  }
}
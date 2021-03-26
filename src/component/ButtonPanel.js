import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



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

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      
        <Grid container spacing={12} className={useStyles.margen}>
          <div className="component-button-panel">
            <div>
            
              <Button name="AC" clickHandler={this.handleClick} red />
              <Button name="CE" clickHandler={this.handleClick} gray/>
              <Button name="%" clickHandler={this.handleClick} gray/>
              <Button name="/" clickHandler={this.handleClick} blue />
              
            </div>
            <div>
              <Button name="7" clickHandler={this.handleClick} gray/>
              <Button name="8" clickHandler={this.handleClick} gray/>
              <Button name="9" clickHandler={this.handleClick} gray/>
              <Button name="*" clickHandler={this.handleClick}  blue/>
            </div>
            <div>
              <Button name="4" clickHandler={this.handleClick} gray/>
              <Button name="5" clickHandler={this.handleClick} gray/>
              <Button name="6" clickHandler={this.handleClick} gray/>
              <Button name="-" clickHandler={this.handleClick}  blue/>
            </div>
            <div>
              <Button name="1" clickHandler={this.handleClick} gray/>
              <Button name="2" clickHandler={this.handleClick} gray/>
              <Button name="3" clickHandler={this.handleClick} gray/>
              <Button name="+" clickHandler={this.handleClick} wide  blue />
            </div>
            <div>
              <Button name="0" clickHandler={this.handleClick}  gray/>
              <Button name="." clickHandler={this.handleClick} gray/>
              <Button name="=" clickHandler={this.handleClick} blue/>
              <Button   display/>
              
              
            </div>
          </div>
          </Grid>
    
    );
  }
}
import React from "react";
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel";
import calculate from "./logic/calculate";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';




import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
     
    },
    '& > svg': {
      margin: theme.spacing(2),
    },

}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (


      <Container maxWidth="sm" className={useStyles.altura}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          <div className={useStyles.root}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <Typography  variant="h6" color="inherit">
                <HomeIcon style={{ fontSize: 40 }} />
                <div>
                Calculadora Johan
                </div>
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <div className="component-app">
            <Display value={this.state.next || this.state.total || "0"} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </Typography>
      </Container>

    );
  }
}
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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
  title: {
    flexGrow: 1,
  },

  altura: {

    paddingTop: 30,

  },

  margen: {
    paddingInline: 30,
  },

  mas: {

    position: 'relative',
    width: 200,
  },

  textoGrande: {

    fontSize: 80,
  },


}));

function App() {

  const classes = useStyles();
  const [numeroInicial, setNumeroInicial] = useState(0, 0);
  const [valorActual, setValorActual] = useState('');
  const [flag, setFlag] = useState(false);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  function handleClickOperacion(op) {
    if (op === "/") {
      setFlag(true);
      if (numeroInicial === 0) {
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial / parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if (op === "X") {
      setFlag(true);
      if (numeroInicial === 0) {
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial * parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if (op === "-") {
      setFlag(true);
      if (numeroInicial === 0) {
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial - parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if (op === "+") {
      setFlag(true);
      if (numeroInicial === 0) {
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial + parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if (op === "%") {
      setFlag(true);
      if (numeroInicial === 0) {
        setNumeroInicial(parseFloat(valorActual));
      } else {
        setValorActual(numeroInicial % parseFloat(valorActual));
        setNumeroInicial(parseFloat(valorActual));
      }
      console.log("valor Actual ->" + valorActual);
      console.log("Numero Inicial ->" + numeroInicial);
      //setNumeroInicial(numeroInicial / valorActual);
    }

    else if (op === "AC" || op === "CE") {
      setFlag(true);
      if (numeroInicial === 0) {
        setNumeroInicial(" ");
      } else {
        setValorActual(" ");
        setNumeroInicial(" ");
      }
    }

    else if (op === "=") {
      setFlag(true);
      if (numeroInicial === 0) {
        setNumeroInicial(" ");
      } else {
        setValorActual(" ");
        setNumeroInicial(" ");
      }
    }

  }

  function handleClickFlecha(tecla) {
    //console.log('elemento -> ', tecla);
    if (!flag) {
      setValorActual(valorActual + tecla);
    } else {
      setValorActual(tecla);
      setFlag(false);
    }

  }

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Johan Alexander Farfan Sierra' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Calculadora ADSI SENA Ficha:1966781-A
          </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >

                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>





        <Container maxWidth="sm" className={classes.altura}>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >

            <div className={classes.root}>
              <Grid container spacing={3} className={classes.margen}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField value={valorActual} id="outlined-basic" size="medium" fullWidth label="Ingrese un valor" className={classes.textoGrande} variant="outlined" />
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickOperacion("AC")} variant="outlined" color="secondary">
                      AC
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickOperacion("CE")} variant="outlined" color="primary">
                      CE
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickOperacion("%")} variant="outlined" color="primary">
                      %
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickOperacion("/")} variant="outlined" color="primary">
                      /
                  </Button>
                  </Paper>
                </Grid>

                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("7")} variant="outlined" color="primary">
                      7
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("8")} variant="outlined" color="primary">
                      8
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("9")} variant="outlined" color="primary">
                      9
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickOperacion("X")} variant="outlined" color="primary">
                      X
                  </Button>
                  </Paper>
                </Grid>


                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("4")} variant="outlined" color="primary">
                      4
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("5")} variant="outlined" color="primary">
                      5
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("6")} variant="outlined" color="primary">
                      6
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickOperacion("-")} variant="outlined" color="primary">
                      -
                  </Button>
                  </Paper>
                </Grid>


                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("1")} variant="outlined" color="primary">
                      1
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("2")} variant="outlined" color="primary">
                      2
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("3")} variant="outlined" color="primary">
                      3
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3} className={classes.mas}>
                  <Paper className={classes.paper} >
                    <Button onClick={() => handleClickOperacion("+")} variant="outlined" color="primary">
                      +
                  </Button>
                  </Paper>
                </Grid>



                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha("0")} variant="outlined" color="primary">
                      0
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickFlecha(".")} variant="outlined" color="primary">
                      .
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button onClick={() => handleClickOperacion("=")} variant="outlined" color="primary">
                      =
                    </Button>

                  </Paper>
                </Grid>


              </Grid>
            </div>

          </Typography>
        </Container>

        <FormGroup>
          
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Bogota Colombia 2021
          </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >

                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>



      </React.Fragment>
    </div>
  );
}
export default App;
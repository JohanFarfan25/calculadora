import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  altura: {

    paddingTop: 80,

  },

  margen: {
    paddingInline: 30,
  },

  mas: {

    position: 'relative',
    width: 200,
  },

  textoGrande:{

    fontSize:80,
  },


}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.altura}>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >

            <div className={classes.root}>
              <Grid container spacing={3} className={classes.margen}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <form className={classes.root} noValidate autoComplete="off"> 
                      <TextField id="outlined-basic" size="medium" fullWidth label="Ingrese un valor" className={classes.textoGrande}  variant="outlined" />
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="secondary">
                      AC
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      CE
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      %
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      /
                  </Button>
                  </Paper>
                </Grid>

                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="secondary">
                      7
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      8
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      9
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      *
                  </Button>
                  </Paper>
                </Grid>


                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="secondary">
                      4
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      5
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      6
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      -
                  </Button>
                  </Paper>
                </Grid>


                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="secondary">
                      1
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      2
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      3
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3} className={classes.mas}>
                  <Paper className={classes.paper} >
                    <Button variant="outlined" color="primary">
                      +
                  </Button>
                  </Paper>
                </Grid>



                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="secondary">
                      0
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      .
                    </Button>

                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <Button variant="outlined" color="primary">
                      =
                    </Button>

                  </Paper>
                </Grid>


              </Grid>
            </div>

          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;

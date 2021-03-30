import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));




function Home({ account, balance }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const fecha = new Date()
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const text = ["This paint was made in Japon",
    "This paint was made in Francia",
    "This paint was made in Turquia",
    "This paint was made in Argentina",
    "This paint was made in Peru",
    "This paint was made in E.E.U.U",
    "This paint was made in Japon",
    "This paint was made in Rusia",
    "This paint was made in España",
  ]
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Typography component="h6" variant="h3" align="center" color="textPrimary" gutterBottom>
            Nuestras Tarjetas
            </Typography>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Paint #{card}
                    </Typography>
                    <Typography>
                      {text[Math.floor(Math.random() * text.length)]}
                    </Typography>

                    <Typography>Price: ETH {Math.random(0, 10) * 10} </Typography>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained" color="secondary" onClick={handleClickOpen}>
                      Buy The Paint!!
                      </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                      <DialogTitle align="center" id="form-dialog-title">Ingresa tus Datos</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Para poder adquirir este producto ingresa tus datos aqui los cuales van a ser llevados a un Smart Contract el cual te ayudara con el pago y la entrega. De manera de haber una disputa este contrato se ejecutara en la corte de Kleros.
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="cuenta"
                          disabled
                          label="Tu cuenta"
                          value={account}
                          type="text"
                          fullWidth
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="balance"
                          disabled
                          label="Tu balance"
                          value={balance}
                          type="text"
                          fullWidth
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="price"
                          disabled
                          label="Precio"
                          value={"ETH ", Math.random(0, 10) * 10}
                          type="number"
                          fullWidth
                        />
                        <TextField
                          autoFocus
                          variant="outlined"
                          margin="dense"
                          id="texto"
                          label="Comentario"
                          type="text"
                          multiline
                          rows={4}
                          fullWidth
                        />

                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                          Subscribe
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
export default Home;

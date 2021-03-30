import React from "react";
import { DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, TextField, Container, Typography, CardActions, CssBaseline, CardContent, CardMedia, Button, Card, Grid } from '@material-ui/core';
import useStyles from "../MaterialUi/Home"

function Home({ account, balance }) {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const text = ["Japon",
    "Francia",
    "Turquia",
    "Argentina",
    "Peru",
    "E.E.U.U",
    "Japon",
    "Rusia",
    "España",
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
                      This paint was made in {text[Math.floor(Math.random() * text.length)]}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { common } from "@material-ui/core/colors";
//componentes de material-ui
import {
  OutlinedInput,
  InputLabel,
  FormControl,
  Icon,
  Grid,
  Box,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
//alerta
import { Alert } from "@material-ui/lab";
//iconos
import {
  Lock,
  Create,
  Visibility,
  VisibilityOff,
  Email,
} from "@material-ui/icons";
//creando estilos
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: "16px auto",
    width: "100%",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  border: {
    borderRadius: "50px",
    padding: theme.spacing(2),
    color: common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  padding: {
    padding: theme.spacing(1),
  },
  enlaces: {
    textDecoration: "none",
    fontSize: "18px",
  },
  margen : {
      margin: theme.spacing(1)
  }
}));

export default function Registrarse(props) {
  const classes = useStyles();

  //state del formulario
  const [form, setForm] = useState({
    codigo: "",
  });
  //state de la alerta
  const [alerta, setalerta] = useState({
    valor: false,
    mensaje: "",
  });

  //extrayendo valores del state
  const { codigo } = form;
  //escuchando cambios del state form
  const handleChange = (prop) => (e) => {
    setForm({ ...form, [prop]: e.target.value });
  };
  // cuando el usuario haga submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (codigo.trim() === "") {
      mostrarAlerta("todos los campos son necesarios");
      return;
    }

    props.history.push("/");
  };

  const mostrarAlerta = (mensaje) => {
    setalerta({
      valor: true,
      mensaje,
    });

    setTimeout(() => {
      setalerta({
        valor: false,
        mensaje: "",
      });
    }, 3000);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} md={4}></Grid>
        <Grid item xs={10} md={4}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            mt={5}
          >
            <Icon fontSize="large" className={classes.border}>
              <Lock fontSize="large" />
            </Icon>
            <Typography variant="h5" color="initial">
              Recuperar Contraseña.
            </Typography>
            <br/>
            
            <Typography variant="button" color="initial" align="center">
                ¿Olvidaste tu contraseña ?
          <br/><br/>
                Escribe tu direccion de correo electronico o tu usuario para comenzar el proceso de restablecimiento.
                </Typography>{" "}
          </Box>
          <form onSubmit={handleSubmit}>
            {alerta.valor ? (
              <Alert severity="error">{alerta.mensaje}</Alert>
            ) : null}
            
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Email o usuario
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={form.codigo}
                
                onChange={handleChange("codigo")}
                labelWidth={110}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <Email />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Box mt={1} width="100%" display="flex">
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                className={classes.margen}
                type="submit"
              >
               Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.margen}
                type="submit"
              >
               Enviar
              </Button>
         
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              mt={3}
              width="100%"
            >
           
            </Box>
            <Box display="flex" justifyContent="center" mt={3}>
              Copyright &copy; Mensajeria Neitor 2020.
            </Box>
          </form>
        </Grid>
        <Grid item xs={1} md={4}></Grid>
      </Grid>
    </div>
  );
}

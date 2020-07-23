import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {common} from "@material-ui/core/colors"
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
import { Lock, Create , Visibility , VisibilityOff , Email} from "@material-ui/icons";
//creando estilos
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",

  },
  margin: {
    margin:"16px auto",
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
    color:common.white,
    backgroundColor: theme.palette.secondary.main,
  },
  padding: {
    padding: theme.spacing(1),
  },
  enlaces: {
    textDecoration: "none",
    fontSize: "18px",
  },
}));

export default function Registrarse(props) {
  const classes = useStyles();

  //state del formulario
  const [form, setForm] = useState({
    codigo: "",
    correo: "",
    password: "",
    showPassword : false
  });
  //state de la alerta
const [alerta, setalerta] = useState({
    valor : false , 
    mensaje : ""
})
  
  //extrayendo valores del state
  const { codigo, correo, password } = form;
  //escuchando cambios del state form
  const handleChange = (prop) => (e) => {
    setForm({ ...form, [prop]: e.target.value });
  };
  // cuando el usuario haga submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(codigo.trim() === ""  || correo.trim() === "" || password.trim() === ""){
        mostrarAlerta('todos los campos son necesarios')
        return 
    }
    if( password.trim().length < 6 ){
        mostrarAlerta('La contraseña debe de tener al menos 6 caracteres')
        return 
    }
    props.history.push('/Dashboard')
  };

  const mostrarAlerta =  mensaje => {
      setalerta({
          valor : true ,
          mensaje
      })
   
   setTimeout(() => {
       setalerta({
        valor : false,
        mensaje : ""
       })
   }, 3000);
  }
  const handleClickShowPassword = () => {
      setForm({
          ...form ,
          showPassword : !form.showPassword
      })
  }
  return (
    <div className={classes.root}>
      <Grid container>
      <Grid item xs={1} md={4}></Grid>
      <Grid item xs={10} md={4}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
            mt={6}
            mb={3}
          >
            <Icon fontSize="large" className={classes.border}>
              <Lock fontSize="large" />
            </Icon>

            <Typography variant="h5" color="initial">
              Iniciar sesión.
            </Typography>

            <form onSubmit={handleSubmit}>
  {alerta.valor  ? <Alert severity="error">{alerta.mensaje}</Alert> : null}
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Codigo{" "}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={form.codigo}
                  type="number"
                  onChange={handleChange("codigo")}
                  labelWidth={60}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                               <Create />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={form.correo}
                  type="email"
                  onChange={handleChange("correo")}
                  labelWidth={60}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >          <Email />
       
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
          
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={form.password}
                  onChange={handleChange("password")}
                  type={form.showPassword ? 'text' : 'password'}
                  labelWidth={60}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        
                        edge="end"
                      >
                        {form.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box mt={3} width="100%">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.padding}
                  type="submit"
                >
                  Registrarse
                </Button>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mt={3}
                width="100%"
              >
                <Link to="/RecuperarContraseña" className={classes.enlaces}>
                  {" "}
                  ¿Olvidaste tu contraseña ?{" "}
                </Link>
              
              </Box>
              <Box display="flex" justifyContent="center" mt={3}>
                Copyright &copy; Mensajeria Neitor 2020.
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={1} md={4}></Grid>
      </Grid>
    </div>
  );
}

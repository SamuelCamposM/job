import React, { useState } from "react";

import {
  makeStyles,
  Hidden,
  Box,
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Button,
} from "@material-ui/core";
import Navbar from "../components/layout/Navbar";
import Cajon from "../components/layout/Cajon";
import Tarjeta from "../components/Tarjeta";
import {
  Textsms,
  BarChart,
  AddShoppingCart,
  Email,
  ContactPhone,
} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#e1e1e1",
    padding: theme.spacing(3),
  },
  backgroundColor: {},
  margin: {
    margin: "8px auto",
    width: "100%",
  },
  border: {
    borderRadius: "15px",
  },
}));
const Contenedor = () => {
  const [abrir, setabrir] = useState(false);
  const clases = useStyle();
  const handleAbrir = () => {
    setabrir(!abrir);
  };
  return (
    <div className={clases.root}>
      <Navbar cerrar={handleAbrir} />

      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>

      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={handleAbrir} />
      </Hidden>
      <div className={clases.content}>
        <div className={clases.toolbar}></div>
        {/* //aca ira el contenido de la pagina */}
        <Box display="flex" justifyContent="space-around">
          <Tarjeta
            contenido="Total de SMS enviados el dia de hoy."
            icono={<Textsms />}
            titulo="Total enviados hoy."
            subheader="34033."
          />
          <Tarjeta
            contenido="Total de SMS enviados."
            icono={<BarChart />}
            titulo="Total enviados."
            subheader="8388838."
          />
          <Tarjeta
            contenido="Paquete de SMS cargados."
            icono={<AddShoppingCart />}
            titulo="Paquetes cargados"
            subheader="5000."
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          mt={4}
          className={clases.border}
        >
          <Box width="45%">
            <Typography variant="h5" color="initial">
              Enviar SMS.
            </Typography>
            <Box bgcolor="white" p={2} className={clases.border}>
              <FormControl
                fullWidth
                className={clases.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Mensaje
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  type="text"
                  labelWidth={60}
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

              <FormControl
                fullWidth
                className={clases.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Numeros
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  type="number"
                  labelWidth={60}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <ContactPhone />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Enviar
              </Button>
            </Box>
          </Box>
          <Box width="50%">
            <Typography variant="h5" color="initial">
              SMS enviados hoy.
            </Typography>
            <Box bgcolor="white"></Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Contenedor;

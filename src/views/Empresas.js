import React, { useState } from "react";

import {
  makeStyles,
  Hidden,

} from "@material-ui/core";
import Navbar from "../components/layout/Navbar";
import Cajon from "../components/layout/Cajon";

import Tabla from "../components/Tabla";


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
  const crearDatos = (nombre, estado, Ruc, Direccion, Celular, Email, boton) => {
    
     return {
      nombre,
      estado,
      Ruc,
      Direccion,
      Celular,
      Email,
      boton,
    };
  };
  const [abrir, setabrir] = useState(false);
  const [filas, setfilas] = useState( [
    crearDatos(
      "Jardines vall333e ",
      "INACTIVO",
      "03026262881001",
      "Clemencia de mora y rio Upano",
      "0987654321",
      "juan.tinizhanay@outlook.com",
      "Create"
    ),
    crearDatos(
      "Jardines vall333e ",
      "INACTIVO",
      "0308562626288101",
      "Clemencia de mora y rio Upano",
      "0987654321",
      "juan.tinizhanay@outlook.com",
      "Create"
    ),
    crearDatos(
      "Jardines vall333e ",
      "INACTIVO",
      "03026265678181001",
      "Clemencia de mora y rio Upano",
      "0987654321",
      "juan.tinizhanay@outlook.com",
      "Create"
    ),
    crearDatos(
      "Jardines vall333e ",
      "INACTIVO",
      "01206262881001",
      "Clemencia de mora y rio Upano",
      "0987654321",
      "juan.tinizhanay@outlook.com",
      "Create"
    ),
    crearDatos(
      "Jardines vall333e ",
      "INACTIVO",
      "0302628810021351",
      "Clemencia de mora y rio Upano",
      "0987654321",
      "juan.tinizhanay@outlook.com",
      "Create"
    ),
    crearDatos(
      "Jardines vall333e ",
      "INACTIVO",
      "030212362881001",
      "Clemencia de mora y rio Upano",
      "0987654321",
      "juan.tinizhanay@outlook.com",
      "Create"
    ),
  ])
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
        <Tabla filas={filas} setfilas={setfilas} />
      </div>
    </div>
  );
};

export default Contenedor;

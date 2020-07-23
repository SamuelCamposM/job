import React, { useState } from "react";

import {
  makeStyles,
  Hidden,

} from "@material-ui/core";
import Navbar from "../components/layout/Navbar";
import Cajon from "../components/layout/Cajon";



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
       
      </div>
    </div>
  );
};

export default Contenedor;

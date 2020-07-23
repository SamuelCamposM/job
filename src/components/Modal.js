import React, { useState, useEffect } from "react";
import {
  Modal as Modale,
  Typography,
  Divider,
  TextField,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
  Button,
} from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "440",
  },
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  align: {
      textAlign: "left",
      width: "100%",
    },
    margin: {
        margin: theme.spacing(1),
    },
    box: {
        flexGrow: 1,
  },
}));

const Modal = (props) => {
    //hook de estilos 
    const clases = useStyles();
    //extrayendo valores de los props y colocandolos en el state
      const [empresa, setempresa] = useState({
    nombre: props.EmpresaInfo.nombre,
    estado: props.EmpresaInfo.estado,
    Ruc: props.EmpresaInfo.Ruc,
    Direccion: props.EmpresaInfo.Direccion,
    Celular: props.EmpresaInfo.Celular,
    Emai: props.EmpresaInfo.Email,
boton: "Create"
  });

  //define si se esta editando o no
  const [editar, seteditar] = useState(false);
  //cuando los props se cambian coloco el state de llos props en el state de empresa 
  useEffect(() => {
    setempresa({
        ...props.EmpresaInfo,
        boton : "Create",
    });
    if (props.EmpresaInfo.nombre.length > 1) {
      seteditar(true);
    }
  }, [props.EmpresaInfo]);
  //   extrayendo valores del state
  const { nombre, estado, Ruc, Direccion, Celular, Email } = empresa;
  //definiendo los estilos del modal
  const [modalStyle] = useState(getModalStyle);
//funcion que escucha los cambios de los inputs
  const cambiarState = (prop) => (e) => {
    console.log("empresa", empresa);
    setempresa({ ...empresa, [prop]: e.target.value });
  };

  //cuando se hace submit al editar
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoArreglo = props.filas.map((fila) => {
      if (fila.Ruc !== Ruc) {
        return fila;
      } else {
        return empresa;
      }
    });
    props.setfilas(nuevoArreglo);
    props.handleClose();
    seteditar(false);
  };

  //cuando se hace submit para crear una nueva empresa
  const handleSubmitAgregar = (e) => {
    e.preventDefault();
    props.filas.push(empresa);
    props.handleClose();
    seteditar(false);
  };
  return (
    <Modale open={props.open} >
      <div style={modalStyle} className={clases.paper}>
        <form>
          {!editar ? (
            <Typography variant="h5" color="initial" className={clases.align}>
              Nueva Empresa.
            </Typography>
          ) : (
            <Typography variant="h5" color="initial" className={clases.align}>
              Editar Empresa.
            </Typography>
          )}
          <Divider />
          <Box display="flex" justifyContent="space-between">
            <TextField
              value={nombre}
              className={clases.margin}
              name="nombre"
              label="Nombre de Empresa"
              onChange={cambiarState("nombre")}
              fullWidth
            />
            <TextField
              value={Ruc}
              className={clases.margin}
              name="Ruc"
              label="Ruc"
              onChange={cambiarState("Ruc")}
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <TextField
              name="Email"
              label="Email"
              value={Email}
              className={clases.margin}
              onChange={cambiarState("Email")}
              fullWidth
            />

            <TextField
              value={Celular}
              label="Celular"
              name="Celular"
              className={clases.margin}
              onChange={cambiarState("Celular")}
              fullWidth
            />
          </Box>
          <TextField
            value={Direccion}
            name="Direccion"
            label="Direccion"
            className={clases.margin}
            onChange={cambiarState("Direccion")}
            fullWidth
          />
          <Box display="flex" justifyContent="space-between">
            <TextField
              name=""
              label="Paquete contradado"
              className={clases.margin}
              fullWidth
            />

            <Box width="40%" display="flex">
              <FormControl component="fieldset">
                <FormLabel component="legend">Estado</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="estado"
                  onChange={cambiarState("estado")}
                  value={estado}
                >
                  <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <FormControlLabel
                      value="ACTIVO"
                      control={<Radio />}
                      label="SI"
                    />
                    <FormControlLabel
                      value="INACTIVO"
                      control={<Radio />}
                      label="NO"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Divider />
          <Box width="100%" display="flex" justifyContent="flex-end" mt={2}>
            {!editar ? (
              <Button
                variant="contained"
                color="primary"
                className={clases.margin}
                type="submit"
                onClick={handleSubmitAgregar}
              >
                Crear
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={clases.margin}
                type="submit"
                onClick={handleSubmit}
              >
                Guardar
              </Button>
            )}
            <Button
              variant="contained"
              color="secondary"
              className={clases.margin}
              onClick={() => {
                props.handleClose();
                seteditar(false);
              }}
            >
              Cancelar
            </Button>
          </Box>
        </form>
      </div>
    </Modale>
  );
};

export default Modal;

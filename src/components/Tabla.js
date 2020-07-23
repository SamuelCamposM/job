import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Create, DeleteForever, AddCircle } from "@material-ui/icons";
import Modal from "./Modal";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableBody,
  IconButton,
  Box,
} from "@material-ui/core";


//simulacion de la base de datos columnas
const columnas = [
  { id: "nombre", label: "Nombre", minWidth: 10 },
  { id: "estado", label: "Estado", minWidth: 10 },
  {
    id: "Ruc",
    label: "Ruc",
    minWidth: 10,
    align: "right",
  },
  {
    id: "Direccion",
    label: "Direccion",
    minWidth: 10,
    align: "right",
  },
  {
    id: "Celular",
    label: "Celular",
    minWidth: 10,
    align: "right",
  },
  {
    id: "Email",
    label: "Email",
    minWidth: 10,
    align: "right",
  },
  {
    id: "boton",
    label: "Editar/Eliminar",
    minWidth: 105,
    align: "right",
  },
];

//simulacion de la base de datos filas

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
}));

const Tabla = (props) => {
  //filas recividas a trabes de los props
  const { filas, setfilas } = props;
  const clases = useStyles();

  //define si el modal seabre o no
  const [open, setopen] = useState(false);
  //datos de la empresa que se selcciona
  const [EmpresaInfo, setEmpresaInfo] = useState({
    nombre: "",
    estado: "",
    Ruc: "",
    Direccion: "",
    Celular: "",
    Email: "",
  });
//funcion que abre el modal
  const handleOpen = () => {
    setopen(true);
  };

  //funcion que cierrra el modal
  const handleClose = () => {
    setEmpresaInfo({
      nombre: "",
      estado: "ACTIVO",
      Ruc: "",
      Direccion: "",
      Celular: "",
      Email: "",
    });
    setopen(false);
  };

  const infoEmpresa = (id) => {
    const informacion = filas.filter((fila) => fila.Ruc === id);
    setEmpresaInfo(informacion[0]);
  };
  const [pagina, setpagina] = useState(0);
  const [filasPorPagina, setfilasPorPagina] = useState(5);

  const handleChangePage = (e, nuevaPagina) => {
    setpagina(nuevaPagina);
  };
  const handleChangeRowsPerPage = (e) => {
    setfilasPorPagina(+e.target.value);
    setpagina(0);
  };

  const eliminarEmpresa = (id) => {
    const nuevoArreglo = filas.filter((fila) => fila.Ruc !== id);
    setfilas(nuevoArreglo);
  };
  return (
    <Paper className={clases.root}>
      <Box display="flex" flexDirection="row-reverse">
        <IconButton
          aria-label=""
          onClick={() => {
            handleOpen();
          }}
        >
          <AddCircle />
        </IconButton>
      </Box>
      {/* cuerpo  del modal */}
      <Modal
        open={open}
        handleClose={handleClose}
        EmpresaInfo={EmpresaInfo}
        setEmpresaInfo={setEmpresaInfo}
        filas={filas}
        setfilas={setfilas}
      />

      {/* inicio de la tabla */}
      <TableContainer className={clases.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {/* recorriendo el encabezado */}
              {columnas.map((columna) => (
                <>
                  <TableCell
                    key={columna.id}
                    align={columna.align}
                    style={{ minWidth: columna.minWidth }}
                  >
                    {columna.label}
                  </TableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* //recorriendo las filas */}
            {filas
              .slice(
                pagina * filasPorPagina,
                pagina * filasPorPagina + filasPorPagina
              )
              .map((fila) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={fila.Ruc}>
                    {columnas.map((columna) => {
                      const value = fila[columna.id];
                      return (
                        <>
                          <TableCell key={columna.id} align={columna.align}>
                            {/* creando un ternario para colocar los botones en la tabla */}
                            {value === "Create" ? (
                              <>
                                <IconButton
                                  aria-label=""
                                  onClick={() => {
                                    infoEmpresa(fila.Ruc);
                                    handleOpen();
                                  }}
                                >
                                  <Create />
                                </IconButton>
                                <IconButton
                                  aria-label=""
                                  onClick={() => eliminarEmpresa(fila.Ruc)}
                                >
                                  <DeleteForever />
                                </IconButton>
                              </>
                            ) : (
                              value
                            )}
                          </TableCell>
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        {/* pie de la tabla  */}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 25, 50, 100]}
        component="div"
        count={filas.length}
        rowsPerPage={filasPorPagina}
        page={pagina}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Tabla;

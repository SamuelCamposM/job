import React from "react";
import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  makeStyles
} from "@material-ui/core";
import { Dashboard, Person, BusinessCenter, Receipt } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    enlace : {
        textDecoration : "none",
        color: theme.palette.common.black,
        
    }
}))

const Lista = () => {
    const clases = useStyles()
  return (
    <div>
      <List component="nav">
        
        <Box m={1}>
          <Link to="/Dashboard" className={clases.enlace}>
            <ListItem button>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Tablero " />
            </ListItem>
          </Link>
        </Box>

        <Box m={1}>
        <Link to="/Reportes" className={clases.enlace}>
          <ListItem button>
            <ListItemIcon>
              <Receipt />
            </ListItemIcon>
            <ListItemText primary="Reportes" />
          </ListItem>
        </Link>
        </Box>

        <Box m={1}>
        <Link to="/Usuarios" className={clases.enlace}>
          <ListItem button >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItem>
          </Link>
        </Box>

        <Box m={1}>
        <Link to="/Empresas" className={clases.enlace}>
          <ListItem button>
            <ListItemIcon>
              <BusinessCenter />
            </ListItemIcon>
            <ListItemText primary="Empresas " />
          </ListItem>
          </Link>
        </Box>

      </List>
      <Divider />
    </div>
  );
};

export default Lista;

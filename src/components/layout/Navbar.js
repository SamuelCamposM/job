import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  MenuItem,
  Menu,
  Divider,
} from "@material-ui/core";
import { Menu as MenuIcon, Notifications, Person } from "@material-ui/icons";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
  menuBoton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));
const Navbar = (props) => {
  //state para el menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificacion, setnotificacion] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickk = (event) => {
    setnotificacion(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setnotificacion(null);
  };
  const clases = useStyle();
  return (
    <AppBar position="fixed" color="inherit" className={clases.appBar}>
      <Toolbar>
        <IconButton
          aria-label=""
          className={clases.menuBoton}
          onClick={props.cerrar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={clases.grow}></Typography>

        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClickk}
        >
          <Notifications />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={notificacion}
          keepMounted
          open={Boolean(notificacion)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Se enviaron 540 ms</MenuItem>
          <MenuItem onClick={handleClose}>Te quedan 60 sms</MenuItem>
        </Menu>

        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Person />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

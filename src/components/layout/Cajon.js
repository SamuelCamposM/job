import React from "react";
import {
  makeStyles,
  Drawer,
  Divider,
  Box,
  Typography,
} from "@material-ui/core";
import Lista from "./Lista";
//define el ancho del cajon / drawer
const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  margincero: {
    padding: "0px",
    marginTop: theme.spacing(1),
    textShadow: "1px 1px 2px #ccc",
  },
}));

const Cajon = (props) => {
  const clases = useStyle();
  return (
    <Drawer
      className={clases.drawer}
      classes={{
        paper: clases.drawerPaper,
      }}
      variant={props.variant}
      open={props.open}
      onClose={props.onClose}
    >
      <div className={clases.toolbar}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={clases.margincero}
        >
          <Typography
            variant="h5"
            color="initial"
            className={clases.margincero}
          >
            SMS PANEL
          </Typography>
        </Box>
      </div>
      <Divider />
      <Lista />
    </Drawer>
  );
};

export default Cajon;

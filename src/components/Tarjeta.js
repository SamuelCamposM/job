import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import { Divider, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
    width: "325px",
    display: "flex",
    flexDirection: "column",

    alignContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[600],
    padding: theme.spacing(1),
  },
}));

export default function Tarjeta(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Icon>{props.icono}</Icon>
          </Avatar>
        }
        title={props.titulo}
        subheader={props.subheader}
      />

      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.contenido}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}

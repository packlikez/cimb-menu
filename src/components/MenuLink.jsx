import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {withStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  navLink: {
    textDecoration: "none",
    color: "black",
    "&:hover div": { backgroundColor: "#6F191D", color: "white" }
  },
  activeNavLink: {
    "& div": { backgroundColor: "#6F191D", color: "white" },
    "&:hover div": { backgroundColor: "#6F191D" },
    color: "white"
  }
});

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(NavLink);

export default function MenuLink(props) {
  const classes = useStyles();

  if (props.to)
    return (
      <StyledMenuItem
        className={classes.navLink}
        activeClassName={classes.activeNavLink}
        to={props.to}
      >
        {props.children}
      </StyledMenuItem>
    );

  return props.children;
}

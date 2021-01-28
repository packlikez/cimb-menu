import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import PopupMenu from "./PopupMenu";
import MenuLink from "./MenuLink";


const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

export default function CollapseMenu(props) {
    const menus = props.menus;
    const classes = useStyles(props);
    const [open, setOpen] = React.useState(null);

    const handleClick = value => () => {
        if (value === open) return handleClose();
        setOpen(value);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
      <List
        dense
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {menus.map((menu, index) => {
          const isMenuOpen = open === index;
          return (
            <Fragment>
              <PopupMenu
                isActive={!props.isFullMenu}
                name={menu.name}
                subMenus={menu.children}
              >
                <MenuLink to={menu.to}>
                  <ListItem button onClick={handleClick(index)}>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ style: { fontWeight: "bold" } }}
                      primary={menu.name}
                    />
                    {menu.children ? (
                      isMenuOpen ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>
                </MenuLink>
              </PopupMenu>

              {menu.children && (
                <Collapse
                  in={props.isFullMenu && isMenuOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List dense component="div" disablePadding>
                    {menu.children.map(child => (
                      <MenuLink to={child.to}>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>{child.icon}</ListItemIcon>
                          <ListItemText primary={child.name} />
                        </ListItem>
                      </MenuLink>
                    ))}
                  </List>
                </Collapse>
              )}
            </Fragment>
          );
        })}
      </List>
    );
}

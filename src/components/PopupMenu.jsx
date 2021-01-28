import React, {Fragment} from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "center",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
    }}
    {...props}
  />
));

export default function PopupMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ref = React.createRef();

  const handleClick = () => {
    setAnchorEl(ref.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Children = () => (
    <Tooltip title={props.name} placement="right">
      {props.children}
    </Tooltip>
  );

  if (!props.isActive || !props.subMenus) return <Children />;

  return (
    <Fragment>
      <div
        ref={ref}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Children />
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableRestoreFocus
      >
        <List dense component="div" disablePadding>
          {props.subMenus.map(child => (
            <ListItem button>
              <ListItemIcon>{child.icon}</ListItemIcon>
              <ListItemText primary={child.name} />
            </ListItem>
          ))}
        </List>
      </StyledMenu>
    </Fragment>
  );
}

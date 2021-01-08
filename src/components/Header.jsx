import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#333",
      color: "white"
    }
  }
}));


function Header(props){
  const classes = useStyles();

  const {darkMode} = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Calculator
          </Typography>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            className={classes.menu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={darkMode}>Dark Mode</MenuItem>
            <MenuItem onClick={handleClose}>Close</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

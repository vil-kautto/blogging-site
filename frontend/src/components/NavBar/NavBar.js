import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Popup from '../Popup/Popup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" color="default" >
        <Toolbar className="navbar">
          <Link variant="h6" href="#" className={classes.title}>
            The TemporaryBlog
          </Link>
          <Popup className={classes.title}/>
          <Button variant="outlined" color="transparent">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
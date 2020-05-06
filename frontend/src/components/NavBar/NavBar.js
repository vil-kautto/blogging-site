import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Popup from '../Popup/Popup';

/**
 * navbar's styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

// Sets styling to the navbar
export default function ButtonAppBar() {
  const classes = useStyles();

/**
 * NavBar object Structure 
 */
  return (
    <div>
      <AppBar position="fixed" color="default" >
        <Toolbar className="navbar">
          <Link variant="h6" href="#" className={classes.title}>
            <b>The TemporaryBlog</b>
          </Link>
          <Popup className={classes.title}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
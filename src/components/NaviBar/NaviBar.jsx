import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
// import styles from './AppBar.module.css';
import {
  AppBar,
  // IconButton,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    padding: '1rem',
    alignItems: 'center',
    fontSize: 'large',
    background: 'rgb(6 173 237 / 30%)',
    boxShadow: '30px 7px 32px 44px rgb(6 173 237 / 30%)',
    marginBottom: '2rem',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4rem',
    fontFamily: 'Caibri',
  },
  appBarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    margin: ' 0 auto',
  },
}));

export default function NaviBar() {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

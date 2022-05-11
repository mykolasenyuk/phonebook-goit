// import { useState } from 'react';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import LoaderSpiner from './components/Spinner/Spinner';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from './images/bgImage1.jpg';
const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /*webpackChunkName: "home-view"*/),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /*webpackChunkName: "register-view"*/
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /*webpackChunkName: "login-view"*/),
);
const PhoneBookView = lazy(() =>
  import(
    './views/PhoneBookView/PhoneBookView' /*webpackChunkName: "phonebook-view"*/
  ),
);

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    minHeight: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar />
        <CssBaseline />
        <Switch>
          <Suspense fallback={<LoaderSpiner />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/phonebook">
              <PhoneBookView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

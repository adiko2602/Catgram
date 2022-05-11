import { createMuiTheme, ThemeProvider, Grid } from "@mui/material";
import { grey } from '@mui/material/colors';
import Header from './pages/Header'
import Friends from './pages/Friends'
import Posts from './pages/Posts'
import Add from './pages/Add'
import Start from './pages/Start'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ContactUs from './pages/ContactUs'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import NotFound from './pages/not-found'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import authService from "./services/auth-service";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[800],
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: authService.loggedIn()
    };
  }

  render() {
    return(
      <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              {this.state.loggedIn ? <Redirect to="/posts" /> : <Start />}
            </Route>
            <Route path="/login">
              {this.state.loggedIn ? <Redirect to="/profile" /> : <Login />}
            </Route>
            <Route path="/sign-up">
              {this.state.loggedIn ? <Redirect to="/" /> : <SignUp />}
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/add">
              {!this.state.loggedIn ? <Redirect to="/login" /> : <Add />}
            </Route>
            <Route path="/profile">
              {!this.state.loggedIn ? <Redirect to="/" /> : <Profile />}
            </Route>
            <Route path="/profileedit">
              {!this.state.loggedIn ? <Redirect to="/" /> : <ProfileEdit />}
            </Route>
            <Route path="/posts">
              {!this.state.loggedIn ? <Redirect to="/" /> : <Posts />}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
    );
  }
}

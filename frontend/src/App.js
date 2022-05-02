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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'



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

function App() {

  const [userLogin, setUserLogin] = useState(true);
  console.log(userLogin)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              { userLogin ? <Posts /> : <Start /> }
            </Route>
            <Route path="/login">
              { userLogin ? <Posts /> : <Login /> }
            </Route>
            <Route path="/sign-up">
              { userLogin ? <Posts /> : <SignUp /> }
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/add">
              { userLogin ? <Add /> : <Login /> }
            </Route>
            <Route path="/profile">
              { userLogin ? <Profile /> : <Login /> }
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App

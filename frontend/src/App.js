import { createMuiTheme, ThemeProvider, Grid } from "@mui/material";
import { grey } from '@mui/material/colors';
import Header from './pages/Header'
import Friends from './pages/Friends'
import Posts from './pages/Posts'
import Add from './pages/Add'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
    small: {
      fontSize: 12,
    },
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <Route exact path="/">
                <Posts />
              </Route>
              <Route path="/add">
                <Add />
              </Route>
            </Grid>
          </Grid>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App

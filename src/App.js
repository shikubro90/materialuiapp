import { Home } from "@mui/icons-material";
import Layout from "./components/Layout";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles';
import {theme} from './components/theme'



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>

    </>
  );
}

export default App;

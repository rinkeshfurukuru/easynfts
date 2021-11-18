
import './App.css';
import Fractionalize from './Fractionalize';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TopVaults from './TopVaults';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/fractionalize">
            <TopVaults/>
          </Route>
          <Route path="/">
            <Fractionalize/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

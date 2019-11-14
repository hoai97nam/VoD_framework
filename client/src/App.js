import React from 'react';
import './App.css';
import Uploads from "./Uploads"
import About from "./About"
import App12 from "./App12"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/upload">
            <Uploads />
          </Route>
          <Route path="/videos">
            <App12 />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
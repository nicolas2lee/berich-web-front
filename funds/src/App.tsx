// @ts-nocheck
import React from 'react';
import './App.css';
import Dashboard from "./features/dashboard/Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import LoginTab from "./features/login/LoginTab";
import PrivateRoute from "./features/common/auth/PrivateRoute";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={() => <p>home</p>} />
              <PrivateRoute path="/protected" >
                  <Dashboard />
              </PrivateRoute>
              <Route path="/login" component={LoginTab} />
          </Switch>
      </Router>
  );
}
export default App;

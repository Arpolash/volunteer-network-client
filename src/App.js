import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute';
import EventTasks from './components/EventTasks/EventTasks';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
          <Header></Header>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/form">
           <Form></Form>
          </Route>
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>
          <Route path="/eventtasks">
            <EventTasks></EventTasks>
          </Route>
        </Switch>
      </Router>
     
    </UserContext.Provider>
  );
}

export default App;

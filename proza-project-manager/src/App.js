import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

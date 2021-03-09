import React, { Component } from 'react';
import ProjectList from './components/ProjectList'
import Home from './components/Home'
import AddProject from './components/AddProject'
import ProjectDetail from './components/ProjectDetail'
import { Switch, Link, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/project-list'>Project List</Link>
          <Link to='/add-project'>Add Project</Link>
        </nav>
        <div id="main">
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} />} />
            <Route exact path='/project-list' render={(props) => <ProjectList {...props} />} />
            <Route exact path='/add-project' render={(props) => <AddProject {...props} />} />
            <Route exact path='/detail/:projectId' render={(props) => <ProjectDetail {...props} />} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
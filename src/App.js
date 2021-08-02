import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import { InitParticals, animate} from './components/Particals'
import Home from './components/Home'
import Card from './components/Card'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  InitParticals();
  animate();
  return (
    <React.Fragment>
        <Header/>
        <div className="container-fluid d-flex justify-content-center align-items-center ">
        <div className="container d-flex flex-column justify-content-center align-items-center  text-center h-50">
          
          <About/>
          <Skills />
          <Projects />
          {/* <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/card' component={Card}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
          </Switch> */}
        </div>
        </div>
        <Contact />
        
    </React.Fragment>
  );
}

export default App;

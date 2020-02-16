import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import CourseStructure from './components/CourseStructure';
import Greet from './components/Greet';
import WelcomeClassc from './components/WelcomeClassc';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/:coursename" component={CourseStructure}/> 
        {/* same route, component for react and node 
        this /:coursename kind of variable path is used when we have to display same component for a certain route and still dynamic data display
        */}
      </BrowserRouter>

      <Greet name="Krishna" heroName="Krishna Raj"/> {/*These will be received by Greet.js using props*/}
      <hr/>
      <WelcomeClassc newname="Krish Boy" newheroName="The king of kings"/>
      <hr />
      <FunctionClick/>
      <ClassClick />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './images/gspann-logo.svg';
import Adventures from './components/Adventures';
import AdventureDetail from './components/AdventureDetail';
import AEMResponsiveGrid from './components/aem/AEMResponsiveGrid';
import AEMTitle from './components/aem/AEMTitle';
import AEMText from './components/aem/AEMText';
import AEMImage from './components/aem/AEMImage';

import './App.scss';

const {  REACT_APP_PUBLIC_URI } = process.env;

function App() {

  return (
    <Router>
      <div className="App">
        <header>
          <img src={REACT_APP_PUBLIC_URI + '/' + logo} className="logo" alt="Gspann Logo"/>
          <hr />
        </header>
      <Switch>
        <Route path='/adventure:path'>
          <AdventureDetail />
        </Route>  
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>   
  );
}

/***
 * Displays a grid of current adventures
 */
function Home() {
  return (
    <div className="Home">
        <AEMResponsiveGrid
            pagePath='/content/wknd-app/us/en/home' 
            itemPath='root/responsivegrid'/>

        <AEMTitle
            pagePath='/content/wknd-app/us/en/home' 
            itemPath='root/title'/>
      <Adventures />
  </div>
  );
}

export default App;
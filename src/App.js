import React from 'react';
import home from './components/home.js';
import strPhysique from './components/strPhysique.js';
import strMorale from './components/strMorale.js';
import aifPhysique from './components/aifPhysique.js';
import aifMorale from './components/aifMorale.js';
import consultation from './components/consultation.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";



function App() {
  return (
    <Router>
        <div className="App">
      
        
        
                  <Navbar></Navbar>
                  <Route exact path="/" component={home} />      
                  <Route path="/strPhysique" component={strPhysique} />
                  <Route path="/strMorale" component={strMorale} />
                  <Route path="/aifPhysique" component={aifPhysique} />
                  <Route path="/aifMorale" component={aifMorale} />
                  <Route path="/consultation" component={consultation} />

        
      
      
        </div>
    </Router>
  );
}

export default App;

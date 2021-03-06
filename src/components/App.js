import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Team from '../containers/Team';
import Rules from '../containers/Rules'
import BoardContainer from '../containers/BorardContainer';
import '../styles/main.css';
import '../styles/game.css';


const App = () => {
  return (
    <Router>
      <div className="main-container">
      <Route  path="/rules" component={Rules}/>
        <Route exact path="/game" component={BoardContainer} />
        <Route exact path="/team" component={Team} />
      </div>
    </Router>
  );
};

export default App;

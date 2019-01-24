import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Team from '../containers/Team';
import Rules from '../containers/Rules'

const App = () => {
  return (
    <Router>
      <div>
      <Route exact path="/team" component={Team} />
      <Route  path="/rules" component={Rules}/>
      </div>
    </Router>
  );
};

export default App;

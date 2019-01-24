import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Team from './Team';

const App = () => {
  return (
    <Router>
      <Route exact path="/team" component={Team} />
    </Router>
  );
};

export default App;

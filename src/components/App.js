import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Team from '../containers/Team';
import BoardContainer from '../containers/BorardContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/game" component={BoardContainer} />
        <Route exact path="/team" component={Team} />
      </div>
    </Router>
  );
};

export default App;

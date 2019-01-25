import React, { Component } from 'react';
import rules from '../content/rules'
import '../styles/rule.css'

class Rules extends Component {
  state = {
      rules: rules
  };

  render() {
    const{rules} = this.state
     return(
         <div className="rules">
         <h1>Conway's Game of Life Rules</h1>
        { rules.map(rule =>
        <div key={rule.id}>
            <h1>Rule #{rule.id}</h1>
            <h3>{rule.rule}</h3>
        </div>
        )}
        </div>
    ) }
}
export default Rules

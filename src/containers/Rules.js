import React, { Component } from 'react';
import rules from '../content/rules'

class Rules extends Component {
  state = {
      rules: rules
  };

  render() {
    const{rules} = this.state
     return(
         <div>
         <h1>Conway's Game of Life Rules</h1>
        { rules.map(rule =>
        <div key={rule.id}>
            <h4>{rule.rule}</h4>
        </div>
        )}
        </div>
    ) }
}
export default Rules

import React, { Component } from 'react';
import team from '../content/TeamContent';

class Team extends Component {
  state = {
    team: team
  };
  render() {
    return (
      <div>
        <h1>Team</h1>
        {this.state.team
        .map(member => 
        <div>
          <div background={member.picUrl}></div>
          <p>{member.name}</p>
          <div></div>
          <div></div>
          <p>{member.info}</p>
        </div>)}
      </div>
    );
  }
}

export default Team;

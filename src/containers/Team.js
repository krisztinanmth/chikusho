import React, { Component } from 'react';
import team from '../content/TeamContent';
import '../styles/team.css';

class Team extends Component {
  state = {
    team: team
  };
  render() {
    console.log(this.state.team);
    return (
      <div>
        <h1>Team</h1>
        {this.state.team
        .map(member => 
        <div key={member.id}>
          <div style={{backgroundImage: "url(" + member.picUrl + ")"}}></div>
          <p>{member.name}</p>
          <div></div>
          <p>{member.info}</p>
        </div>)}
      </div>
    );
  }
}

export default Team;

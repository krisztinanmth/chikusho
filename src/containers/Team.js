import React, { Component } from 'react';
import team from '../content/TeamContent';
import '../styles/team.css';

class Team extends Component {
  state = {
    team: team
  };
  render() {
    console.log('member', this.state.team);
    return (
      <div id="team-container">
        <h1>Team</h1>
        {this.state.team
        .map(member => 
        <div key={member.id}>
          <div style={{backgroundImage: "url(" + member.picUrl + ")"}}></div>
          <p>{member.name}</p>
          <div style={{backgroundImage: "url(github.svg)"}}></div>  
          <div style={{backgroundImage: "url(linkedin.svg)"}}></div>
          <p>{member.info}</p>
        </div>)}
      </div>
    );
  }
}

export default Team;

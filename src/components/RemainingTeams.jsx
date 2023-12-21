import React from 'react'
import './styles/remainingTeamsStyle.css'


const RemainingTeams = ({group1Teams, group2Teams}) => {

  let group1Logos = []
  for (let i = 0; i <group1Teams.length; i++) {
    group1Logos.push(<div className='team-logos'>
      <img 
      src={require(`../assets/teams/${group1Teams[i].name}.png`)} 
      alt="team logo"
      className='logo' 
      />
      <p className='team-name'>{group1Teams[i].name}</p>
      </div>)
  }

  let group2Logos = []
  for (let i = 0; i < group2Teams.length; i++) {
      group2Logos.push(<div className='team-logos'>
        <img 
        src={require(`../assets/teams/${group2Teams[i].name}.png`)} 
        alt="team logo"
        className='logo' 
        />
        <p className='team-name'>{group2Teams[i].name}</p>
        </div>)
  }

  return (
    <div className='container'>
        <div className='group'>
            <h4 className='group-title'>Group 1</h4>
            {group1Logos}
        </div>
        <div className='vl'></div>
        <div className='group'>
            <h4 className='group-title'>Group 2</h4>
            {group2Logos}
        </div>
    </div>
  )
}

export default RemainingTeams
import React from 'react'
import './styles/matchups.css'



const Matchups = ({matchups}) => {  

    let matchupDivs = []

  for (let i = 0; i < matchups.length; i++) {
    if (matchups[i].length === 2) {
      console.log(matchups[i])
    matchupDivs.push(
      <div className='match'>
        <img src={require(`../assets/teams/${matchups[i][0].name}.png`)} className='logos' alt="team logo" />
        <p>{matchups[i][0].name}</p>
        <p className='vs'> vs </p>
        <img src={require(`../assets/teams/${matchups[i][1].name}.png`)} className='logos' alt="team logo" />
        <p>{matchups[i][1].name}</p>
      </div>
      )
     }
     else {
        console.log('test')
        matchupDivs.push(
            <div className='match'>
                <img src={require(`../assets/teams/${matchups[i][0].name}.png`)} className='logos' alt="team logo" />
                <p>{matchups[i][0].name}</p>
                <p className='vs'> vs </p>
            </div>
            )
    }
}

  return (
    <div className='matchups-container'>
        <h3 className='matchup-title'>Matchups</h3>
        {matchupDivs}
    </div>
  )
}

export default Matchups
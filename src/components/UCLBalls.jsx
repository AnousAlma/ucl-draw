import uclBall from '../assets/UCL_Ball.png'
import React from 'react'
import './styles/uclBallsStyle.css'

const UCLBalls = ({group2Teams, removeTeam, currentGroup, setCurrentGroup, options, setPickedTeam, matchUps, setMatchups}) => {
    
    function shuffle(a) {
        if (a.length < 1) {return a}
        let tempArray = a
        return tempArray.sort(() => Math.random() - 0.5)
    } 

    const group1Balls = []
    const group2Balls = []
    let shuffledGroup1Balls;
    let shuffledGroup2Balls;

    if (currentGroup === 2) {
        group2Balls.push(
            group2Teams.map((team) => {
                return (
                    <div>
                        <img 
                        src={uclBall} 
                        alt={team.name}
                        width="190rem"
                        className='ball'
                        onClick={() => {
                            setPickedTeam(team)
                            setMatchups((prevMatchUps) => [...prevMatchUps, [team]])
                            setCurrentGroup(1)
                            removeTeam(team)
                        }}
                        />
                    </div>
                )
            }
            )
        )
        shuffledGroup2Balls = shuffle(group2Balls[0])
    }
    else {
        group1Balls.push(
            options.map((team) => {
                return (
                    <div>
                        <img 
                        src={uclBall} 
                        alt={team.name}
                        width="190rem"
                        className='ball'
                        onClick={() => {
                            let tempMatchUps = matchUps
                            tempMatchUps[tempMatchUps.length - 1].push(team)
                            setMatchups(tempMatchUps)
                            setPickedTeam(team)
                            setCurrentGroup(2)
                            removeTeam(team)
                        }}
                        />
                    </div>
                )
            }
            )
        )
        shuffledGroup1Balls = shuffle(group1Balls[0])
    }

    return (
    <div className='ball-container'>
        {shuffledGroup1Balls}
        {shuffledGroup2Balls}
    </div>
  )
}


export default UCLBalls
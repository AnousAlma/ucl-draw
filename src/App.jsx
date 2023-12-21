import './App.css'
import RemainingTeams from './components/RemainingTeams'
import UCLBalls from './components/UCLBalls'
import data from './data/data.json'
import { useEffect, useState } from 'react'
import findOptions from './data/draw_generator'
import Matchups from './components/Matchups'

function App() {

  let [group1Teams, setGroup1Teams] = useState(data[0])
  let [group2Teams, setGroup2Teams] = useState(data[1])

  let [currentGroup, setCurrentGroup] = useState(2)
  let [options, setOptions] = useState([])
  let [pickedTeam, setPickedTeam] = useState({
    "name": "",
    "country": "",
    "bertName": "",
    "group": 0,
    "opponents": []
  })
  let [matchups, setMatchups] = useState([])



  useEffect(() => {
      setOptions(findOptions(group1Teams, group2Teams, pickedTeam))
  }, [currentGroup])

  function removeItem(arr, index) {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            returnArray.push(arr[i])
        }
    }
    return returnArray
  }

  function removeTeam(team) {

    if (group1Teams.includes(team)) {
        const index = group1Teams.indexOf(team)
        const newGroup1 = removeItem(group1Teams, index)
        setGroup1Teams(newGroup1)
    }
    else if (group2Teams.includes(team)) {
        const index = group2Teams.indexOf(team)
        const newGroup2 = removeItem(group2Teams, index)
        setGroup2Teams(newGroup2)
    }
  }

  const optionNames = options.map((team) => {
    if (team !== options[options.length - 1]) {return `${team.name}, `}
    else {return `${team.name}`}
  })

  const currentGroup2 = group2Teams

  return (
    <>
      <h1 className='title'>UCL Draw Simulator</h1>
      {/* {currentGroup===1 ? <h3 className='subtitle'>Drawn Team: {pickedTeam.name}</h3> : ""}
      {currentGroup===2 && matchups.length > 0 ? <h3 className='subtitle'>Matchup: {matchups[matchups.length - 1][0].name} Vs. {matchups[matchups.length - 1][1].name}</h3> : ""} */}
      <main className='main'>
        <RemainingTeams
          group1Teams={group1Teams} 
          group2Teams={group2Teams}
        />
        <UCLBalls 
          group2Teams={currentGroup2}
          removeTeam={removeTeam}
          currentGroup={currentGroup}
          setCurrentGroup={setCurrentGroup}
          options={options}
          setPickedTeam={setPickedTeam}
          matchUps={matchups}
          setMatchups = {setMatchups}
        />
        <Matchups 
          matchups={matchups}
        />
      </main>
      {/* {currentGroup===1 ? <h3 className='subtitle'>Possible Opponents: {optionNames}</h3> : ""} */}
    </>
  )
}

export default App

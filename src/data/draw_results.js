import data from './data.json'

function removeItem(arr, index) {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        if (i != index) {
            returnArray.push(arr[i])
        }
    }
    return returnArray
  }

let group1 = data[0]
let group2 = data[1]

let matchup = []

for (let i = 7; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1))

    let pickedClub = group2[randomIndex]
    group2 = removeItem(group2, randomIndex)

    let group1Names = []
    let tempOptions = []

    for (let i = 0; i < group1.length; i++) {
        group1Names.push(group1[i].name)
    }

    for (let i = 0; i < pickedClub.opponents.length; i++) {
        if (group1Names.includes(pickedClub.opponents[i])) {
            tempOptions.push(pickedClub.opponents[i])
        }
    }


    for (let i = 0; i < group2.length; i++) {
        let count = 0
        let opt;

        for (let j = 0; j < group2[i].opponents.length; j++) {
            if (tempOptions.includes(group2[i].opponents[j])) {
                count++
                opt = group2[i].opponents[j]
            }
        }

        if (count <= 1) {
            tempOptions = tempOptions.filter( (t) => t != opt)
        }
    }

    let randomIndex2 = Math.floor(Math.random() * tempOptions.length)
    let pickedClub2 = tempOptions[randomIndex2]
    matchup.push([pickedClub.name, pickedClub2])
    group1 = removeItem(group1, group1Names.indexOf(pickedClub2))
}

console.log(matchup)
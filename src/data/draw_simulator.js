import findOptions from "./draw_generator.js";
import data from "./data.json"
import promptSync from 'prompt-sync';

const prompt = promptSync();

function shuffle(a) {
    return a.sort(() => Math.random() - 0.5)
} 

export default function simulateDraw() {
    let group1 = [...data[0]]
    let group2 = [...data[1]]
    let group1Names = []

    for (let i = 0; i < group1.length; i++) {
        group1Names.push(group1[i].name)
    }

    let matchup = []

    let shuffledGroup2 = shuffle(group2)
    let shuffledGroup2Names = []
    for (let i = 0; i < shuffledGroup2.length; i++) {
        shuffledGroup2Names.push(shuffledGroup2[i].name)
    }

    while (shuffledGroup2.length > 0) {
        console.log('Pick between these clubs:')
        for (let i = 0; i < shuffledGroup2.length; i++) {
            if (i < shuffledGroup2.length - 1) {
            process.stdout.write(`${i} | `)
            }
            else {
                process.stdout.write(`${i}`)
            }
        }
        console.log('\n')

        let pickedClubIndex1 = prompt()
        let pickedClub1 = shuffledGroup2[parseInt(pickedClubIndex1)].name

        let options = findOptions(group1Names, shuffledGroup2Names, pickedClub1)

        console.log('Pick between these clubs:')
        for (let i = 0; i < options.length; i++) {
            if (i < options.length - 1) {
            process.stdout.write(`${i} | `)
            }
            else {
                process.stdout.write(`${i}`)
            }
        }        
        console.log('\n')
        let pickedClubIndex2 = prompt()
        let pickedClub2 = options[parseInt(pickedClubIndex2)]

        matchup.push([pickedClub1, pickedClub2])
        group1 = group1.filter( (t) => t.name != pickedClub2)
        group2 = group2.filter( (t) => t.name != pickedClub1)
        group1Names = group1Names.filter( (t) => t != pickedClub2)
        shuffledGroup2 = shuffledGroup2.filter( (t) => t.name != pickedClub1)
        shuffledGroup2Names = shuffledGroup2Names.filter( (t) => t != pickedClub1)
    }

    return matchup
}

console.log(simulateDraw())
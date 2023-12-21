import data from './data.json'

export default function findOptions(remainingGroup1, remainingGroup2, group2Pick) {

    let tempOptions = []
    
    for (let i =0; i < data[0].length; i++) {
        if (data[1][i].name === group2Pick) {
            group2Pick = data[1][i]
            break
        }
    }

    for (let i = 0; i < remainingGroup1.length; i++) {
        if (group2Pick.opponents.includes(remainingGroup1[i].name)) {
            tempOptions.push(remainingGroup1[i])
        }
    }


    for (let i = 0; i < remainingGroup2.length; i++) {
        let count = 0
        let opt;

        for (let j = 0; j < remainingGroup2[i].opponents.length; j++) {
            if (tempOptions.includes(remainingGroup2[i].opponents[j])) {
                count++
                opt = remainingGroup2[i].opponents[j]
            }
        }

        if (count <= 1) {
            tempOptions = tempOptions.filter( (t) => t !== opt)
        }
    }

    return tempOptions
}

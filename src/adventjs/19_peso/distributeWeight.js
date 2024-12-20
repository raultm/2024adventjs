export const distributeWeight = (weight) => {
    const boxRepresentations = {
        10: [" _________ ", "|         |", "|_________|"],
        5: [" _____ ", "|     |", "|_____|"],
        2: [" ___ ", "|___|"],
        1: [" _ ", "|_|"],
    }
    let weightNotDistributed = weight
    let boxStack = []
    const boxDistribution = Object.entries(boxRepresentations).reverse().reduce((acc, [boxCapacity, boxRepresentation]) => {
        //console.log(boxCapacity, weightNotDistributed, boxStack)
        while(boxCapacity <= weightNotDistributed) {
            acc[boxCapacity] = (acc[boxCapacity] || 0) + 1;
            weightNotDistributed -= boxCapacity
            let firstElement = boxStack.shift()
            let boxRepresentationNormalized = boxRepresentation.map((line, index) => {
                if(firstElement && index === boxRepresentation.length - 1) {
                    return line.padEnd(firstElement.length - 1, '_')
                }
                return line
            })
            boxStack.unshift(...boxRepresentationNormalized)
        }
        return acc;
    }, [])
    //console.log("Final", boxDistribution, boxStack)
    
    return boxStack.join('\n');
}
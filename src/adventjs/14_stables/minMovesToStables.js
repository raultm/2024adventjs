export const minMovesToStables = (reindeer, stables) => {
    const reindeerSorted = reindeer.sort((a, b) => a - b)
    const stablesSorted = stables.sort((a, b) => a - b)
    let totalDistance = 0
    for (let i = 0; i < reindeerSorted.length; i++) {
        let distance = reindeerSorted[i] - stablesSorted[i]
        if (distance < 0) {
            distance = -distance
        }
        totalDistance += distance
    }
    return totalDistance   
}
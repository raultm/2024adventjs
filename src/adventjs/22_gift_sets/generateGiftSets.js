export const generateGiftSets = (gifts) => {
    let previousSets = [[]]
    let allSets = []
    for (let setLength = 1; setLength <= gifts.length; setLength++) {
        const newSets = []
        previousSets.forEach(previousSet => {
            let minItem = 0
            if (previousSet.length > 0) {
                minItem = gifts.indexOf(previousSet[previousSet.length - 1]) + 1
            }
            for (let fromItem = minItem; fromItem < gifts.length; fromItem++) {
                const gift = gifts[fromItem]
                if (!previousSet.includes(gift)) {
                    newSets.push([...previousSet, gift])
                }
                console.log(previousSet, gift, newSets)

            }
        })
        previousSets = [...newSets]
        allSets.push(...newSets)
    }
    return allSets
}
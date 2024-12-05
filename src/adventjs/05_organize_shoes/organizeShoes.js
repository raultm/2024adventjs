export const organizeShoes = (shoes) => {

    const shoeCounts = {}

    for (const { size, type } of shoes) {
        if (!shoeCounts[size]) shoeCounts[size] = { I: 0, R: 0 }
        shoeCounts[size][type]++
    }

    const pairs = []
    for (const size in shoeCounts) {
        const { I, R } = shoeCounts[size]
        const numPairs = Math.min(I, R)
        pairs.push(...Array(numPairs).fill(Number(size)))
    }

    return pairs
}
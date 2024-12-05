export const organizeShoes = (shoes) => {

    const counts = shoes
        .map(({ size, type }) => `${size}-${type}`)
        .reduce((acc, key) => {
            acc[key] = (acc[key] || 0) + 1
            return acc
        }, {})

    const pairs = Object.entries(counts)
        .filter(([key]) => key.includes('-I'))
        .flatMap(([key, countI]) => {
            const size = key.split('-')[0]
            const oppositeKey = `${size}-R`
            const countR = counts[oppositeKey] || 0
            return Array(Math.min(countI, countR)).fill(Number(size))
        })

    return pairs
}
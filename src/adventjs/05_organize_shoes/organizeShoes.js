export const organizeShoes = (shoes) => {

    return shoes.reduce((acc, { size, type }) => {
        const oppositeKey = `${size}-${type === 'I' ? 'R' : 'I'}`
        if (acc.counts[oppositeKey]) {
            acc.counts[oppositeKey]--
            acc.pairs.push(size)
        } else {
            const currentKey = `${size}-${type}`
            acc.counts[currentKey] = (acc.counts[currentKey] || 0) + 1
        }
        return acc;
    }, { counts: {}, pairs: [] }).pairs
}
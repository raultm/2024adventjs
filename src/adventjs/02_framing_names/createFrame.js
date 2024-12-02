export const createFrame = (names) => {
    const maxLength = Math.max(...names.map(name => name.length))
    
    return names.reduce((acc, name) => {
        acc += `* ${name.padEnd(maxLength)} *\n`
        return acc
    }, `**${"".padEnd(maxLength, "*")}**\n`)+ `**${"".padEnd(maxLength, "*")}**`;
}
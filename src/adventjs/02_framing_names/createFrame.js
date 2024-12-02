export const createFrame = (names) => {
    let maxLength = names.reduce((acc, name) => {
        acc = name.length > acc ? name.length : acc
        return acc
    }, -1)
    
    return names.reduce((acc, name) => {
        acc += `* ${name.padEnd(maxLength)} *\n`
        return acc
    }, `**${"".padEnd(maxLength, "*")}**\n`)+ `**${"".padEnd(maxLength, "*")}**`;
}
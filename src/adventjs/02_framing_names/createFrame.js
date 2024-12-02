export const createFrame = (names) => {
    const maxLength = Math.max(...names.map(name => name.length))
    const border = `**${"".padEnd(maxLength, "*")}**`

    return [
        border,
        ...names.map(name => `* ${name.padEnd(maxLength)} *`),
        border
    ].join("\n")
}
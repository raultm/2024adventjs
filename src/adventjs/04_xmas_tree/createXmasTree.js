export const createXmasTree = (height, ornament) => {
    let blankPadding = "_";
    // Montamos la parte de la copa del arbol
    let xmasTree = [...Array(height)]
        .map((_, index) => {
            let level = index + 1;
            let around = blankPadding.repeat(height - level)
            return around + ornament.repeat(level * 2 - 1) + around
        })
    // Le añadimos el tronco
    let basePadding = blankPadding.repeat(height - 1) + "#" + blankPadding.repeat(height - 1)
    xmasTree.push(basePadding);
    xmasTree.push(basePadding);
    return xmasTree.join('\n');
}
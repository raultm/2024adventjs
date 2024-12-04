export const createXmasTree = (height, ornament) => {
    let xmasTree = [];
    let blankPadding = "_";
    let basePadding = blankPadding.repeat(height-1)+"#"+blankPadding.repeat(height-1)
    for (let level = 1; level <= height; level++) {
        let around = blankPadding.repeat(height-level)
        xmasTree.push( 
              around
            + ornament.repeat(level*2-1) 
            + around
        )
    }
    xmasTree.push(basePadding);
    xmasTree.push(basePadding);
    return xmasTree.join('\n');
}
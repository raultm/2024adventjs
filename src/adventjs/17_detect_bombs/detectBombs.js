export const detectBombs = (grid) => {

    const nearBy = (x, y) => {
        const positions = [
            [-1,-1], [-1, 0], [-1, 1],
            [ 0,-1],          [ 0, 1],
            [ 1,-1], [ 1, 0], [ 1, 1]
        ]
        return positions.reduce((acc, [dx, dy]) => {
            let nx = x + dx
            let ny = y + dy
            
            if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length || grid[nx][ny] === false) {
                return acc  
            }
            return acc + 1
        }, 0)
    }
    return grid.map((row, y) => {
        return row.map((cell, x) => {
            return nearBy(x, y)
        })
    })
}
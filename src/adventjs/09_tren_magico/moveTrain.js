export const moveTrain = (board, mov) => {

    let coordinates = null;

    for (let y = 0; y < board.length; y++) {
        const x = board[y].indexOf('@');
        if (x !== -1) {
            coordinates = { x, y };
            break;
        }
    }

    const movements = {
        "L": { x:-1, y: 0 },
        "R": { x:1 , y: 0 },
        "U": { x:0 , y: -1},
        "D": { x:0 , y: 1 },
    }
    

    if(    coordinates.x + movements[mov].x < 0 
        || coordinates.x + movements[mov].x >= board.length 
        || coordinates.y + movements[mov].y < 0
        || coordinates.y + movements[mov].y >= board.length
    ){
        return "crash"
    }

    let finalPosition = board[coordinates.y + movements[mov].y].charAt(coordinates.x + movements[mov].x)
    
    const finalActions = {
        "o": "crash",
        "*": "eat",
        "·": "none"
    }
    return finalActions[finalPosition];
}
export const isRobotBack = (moves) => {
    const startPosition = [0,0]
    let normalizedMoves = moves
    const opposites = {
        "R":"L",
        "L":"R",
        "U":"D",
        "D":"U"
    }
    const replacements = [
        {
            case: "*X",
            pattern: /\*([a-zA-Z])/g,
            replace: (_, letra) => letra + letra
        },
        {
            case: "!X",
            pattern: /\!([a-zA-Z])/g,
            replace: (_, letra) => opposites[letra]
        },
        {
            case: "X?X",
            pattern: /([a-zA-Z])\?\1/g,
            replace: "$1"
        },
        {
            case: "X?Y",
            pattern: /(.+?)\?(\w)/g,
            replace: (match, secuencia, caracter) => {
                // Verificar si el caracter existe en la secuencia anterior
                console.log( secuencia, caracter)
                if (secuencia.includes(caracter)) {
                  return secuencia; // Si existe, quitamos la interrogación y el carácter
                } else {
                  return secuencia + caracter; // Si no existe, quitamos la interrogación pero dejamos el carácter
                }
              }
        },
        {
            case: "X?Y",
            pattern: /(.+?)\?(\w)/g,
            replace: (match, secuencia, caracter) => {
                // Verificar si el caracter existe en la secuencia anterior
                console.log( secuencia, caracter)
                if (secuencia.includes(caracter)) {
                  return secuencia; // Si existe, quitamos la interrogación y el carácter
                } else {
                  return secuencia + caracter; // Si no existe, quitamos la interrogación pero dejamos el carácter
                }
              }
        },
        

        
    ]
    
    replacements.map(replacement => {
        normalizedMoves = normalizedMoves.replace(replacement.pattern, replacement.replace)
    })
    console.log(normalizedMoves)
    const movements = {
        "R": [ 1, 0],
        "L": [-1, 0],
        "U": [ 0, 1],
        "D": [ 0,-1]
    }
    let currentPosition = startPosition
    normalizedMoves.split('').map(move => {
        currentPosition[0] = currentPosition[0] + movements[move][0]
        currentPosition[1] = currentPosition[1] + movements[move][1]
    })
    if(currentPosition[0] == 0 && currentPosition[1] == 0){
        currentPosition = true
    }
    return currentPosition
}
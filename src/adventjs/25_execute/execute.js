export const execute = (code) => {
    const commands = code.split('')
    let register = 0;
    let next = 0
    
    while (next < commands.length) {
        const command = commands[next]
        if (command === '+') {
                register++
                next++
        } else if (command === '-') {
                register--
                next++
        } else if (command === '>') {
            next++
        } else if (command === '[') {
            for(let i=next+1; i<commands.length; i++){
                if(commands[i] === ']'){
                    next = i + 1
                    register = 0
                    break
                }
            }
        } else if (command === '{') {
            if(register === 0){
                for(let i=next+1; i<commands.length; i++){
                    if(commands[i] === '}'){
                        next = i + 1
                        break
                    }
                }
            }else{
                next++
            }
            
        } else{
            next++
        }

    }
    return register
}
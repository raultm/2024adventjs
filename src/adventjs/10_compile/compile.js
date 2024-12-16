export const compile = (instructions) => {
    let nextInstruction = 0
    let register = { A: undefined }
    const commands = {
        "INC" : (register, target) => { register[target] = (register[target] || 0) + 1; return },
        "DEC" : (register, target) => { register[target] = (register[target] || 0) - 1; return },
        "MOV" : (register, index, target) => {
            if(!isNaN(index)){
                register[target] = Number(index)
            }else{
                register[target] = register[index] ? register[index] : 0
            }
            return
        },
        "JMP" : (register, target, newIndex) => {
            newIndex = Number(newIndex);
            if (Number.isInteger(newIndex) && newIndex >= 0 && newIndex < instructions.length) {
                if (register[target] == 0 || register[target] == undefined) {
                    return newIndex;
                }
            } 
            return
        }
    }

    while(nextInstruction < instructions.length){
        let [command,first,second] = instructions[nextInstruction].split(" ")
        nextInstruction = commands[command](register, first, second) ?? (nextInstruction+1)
    }
    
    return register["A"]
}
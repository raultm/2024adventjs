export const compile = (instructions) => {
    let nextInstruction = 0
    let register = { A: undefined }
    while(nextInstruction < instructions.length){
        let [command,first,second] = instructions[nextInstruction].split(" ")
        
        if(command == "INC"){ register[first] = (register[first] ?? 0) + 1 }
        if(command == "DEC"){ register[first] = (register[first] ?? 0) - 1 }
        if(command == "MOV"){
            if(!isNaN(first)){
                register[second] = Number(first)
            }else{
                register[second] = register[first] ? register[first] : 0
            }
        }
        if(command == "JMP"){
            if(register[first] == 0 && second != nextInstruction){

                nextInstruction = second
                console.log(command, first, second, register)
                continue
            }
        }
        //console.log(command, first, second, register)
        nextInstruction++
    }
    
    //console.log(register)

    return register["A"]
}
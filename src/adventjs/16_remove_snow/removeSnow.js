export const removeSnow = (s) => {
    return s.split('').reduce((acc, cur) => {
        //console.log(acc,acc.at(-1),cur )
        if(cur === acc.at(-1)) {
            acc.pop()
            return acc
        }
        acc.push(cur)
        return acc
    }, []).join('')
}
/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  
    const ornamentValues = {
      "*" : 1,
      "o" : 5,
      "^" : 10,
      "#" : 50,
      "@" : 100
    }
  
    return ornaments.split('').reduce((acc, curr) => {
      //console.log(acc, curr)
      if(acc.total == undefined || !ornamentValues[curr]){
        acc.total = undefined
        return acc
      }
      
      if(ornamentValues[acc.lastOrnament] < ornamentValues[curr]){
        acc.total = acc.total - 2 * acc.buffer
        acc.buffer = 0
      }
        acc.total = acc.total + ornamentValues[curr]
      
      if(ornamentValues[acc.lastOrnament] == ornamentValues[curr]){
        acc.buffer = 0
      }
      acc.buffer = acc.buffer + ornamentValues[curr]
      acc.lastOrnament = curr
      return acc
    }, {lastOrnament: '', total: 0, buffer: 0}).total
  }
export const fixGiftList = (received, expected) => {
  const receivedGrouped = received.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})
  const expectedGrouped = expected.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})

  return  Object.keys(expectedGrouped).reduce((acc, item) => {
    
    acc.extra[item] = (acc.extra[item] || 0) - expectedGrouped[item]
    
    if(acc.extra[item] == 0) delete acc.extra[item]
    if(acc.extra[item] < 0) {
      acc.missing[item] = Math.abs(acc.extra[item])
      delete acc.extra[item]
    }
    // console.log(acc, item, expectedGrouped[item], acc.extra[item] < 0)
    // const missing = expectedGrouped[item] - (receivedGrouped[item] || 0)
    // const extra = (receivedGrouped[item] || 0) - expectedGrouped[item]
    
    // if (missing > 0) acc.missing[item] = missing
    // if (extra > 0) acc.extra[item] = extra
    
    return acc
  }, { missing: {}, extra: receivedGrouped })

  // return Object.keys(receivedGrouped).reduce((acc, item) => {
  //   if (!expectedGrouped[item]) acc.extra[item] = receivedGrouped[item]
  //   return acc
  // }, gifsList)

}
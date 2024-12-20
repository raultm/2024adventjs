export const fixGiftList = (received, expected) => {
  const receivedGrouped = received.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})
  const expectedGrouped = expected.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})

  let gifsList =  Object.keys(expectedGrouped).reduce((acc, item) => {
    const missing = expectedGrouped[item] - (receivedGrouped[item] || 0)
    const extra = (receivedGrouped[item] || 0) - expectedGrouped[item]
    
    if (missing > 0) acc.missing[item] = missing
    if (extra > 0) acc.extra[item] = extra
    
    return acc
  }, { missing: {}, extra: {} })

  return Object.keys(receivedGrouped).reduce((acc, item) => {
    if (!expectedGrouped[item]) acc.extra[item] = receivedGrouped[item]
    return acc
  }, gifsList)

}
function prepareGifts(gifts) {

    //return gifts.sort((a, b) => a - b).filter((el,i,a) => i==(a.length+1) || a[i+1] != el)
    return [...new Set(gifts.sort((a, b) => a - b))];
  }
  
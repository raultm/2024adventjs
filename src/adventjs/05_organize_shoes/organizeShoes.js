export const organizeShoes = (shoes) => {
    
    const shoesBySize = shoes.reduce((acc, shoe) => {
        const shoeType = shoe.type;
        const shoeSize = shoe.size;
        acc[shoeSize] = acc[shoeSize] || {size: shoeSize, "I":0, "R":0};
        acc[shoeSize][shoeType]+= 1;
        return acc;
    }, {});

    let pairs = [];
    Object.keys(shoesBySize).forEach(size => {
        pairs.push(...Array(Math.min(shoesBySize[size].I, shoesBySize[size].R)).fill(Number(size)));
    })
    return pairs
}
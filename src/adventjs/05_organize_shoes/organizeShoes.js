export const organizeShoes = (shoes) => {
    
    const shoesBySize = shoes.reduce((acc, { size, type }) => {
        if (!acc[size]) acc[size] = { I: 0, R: 0 };
        acc[size][type] += 1;
        return acc;
    }, {});

    return Object.entries(shoesBySize).flatMap(([size, { I, R }]) =>
        Array(Math.min(I, R)).fill(Number(size))
    )
}
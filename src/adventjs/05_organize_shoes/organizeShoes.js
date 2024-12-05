export const organizeShoes = (shoes) => {
    
    const shoesBySize = shoes.reduce((acc, { size, type }) => {
        if (!acc.has(size)) acc.set(size, { I: 0, R: 0 });
        acc.get(size)[type]++;
        return acc;
    }, new Map());

    console.log(shoesBySize);
    return Array.from(shoesBySize.entries()).flatMap(([size, { I, R }]) =>
        Array(Math.min(I, R)).fill(Number(size))
    );
}
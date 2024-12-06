export const inBox = (box) => {
    return box
        .slice(1, -1) 
        .some(row => {
            const starIndex = row.indexOf('*');
            return starIndex > 0 && starIndex < row.length - 1;
        });
}
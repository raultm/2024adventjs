export const drawRace = (indices, length) => {
    const horses = indices.length;
    const snowChar = "~";
    const riderChar = "r";

    return indices.map((position, index) => {
        const targetIndex = 
            position > 0 ? position : 
            position < 0 ? length + position : 
            null;

        // Crear la cadena directamente con el carácter del corredor en su posición
        const snowTrack = Array(length).fill(snowChar);
        if (targetIndex !== null && targetIndex >= 0 && targetIndex < length) {
            snowTrack[targetIndex] = riderChar;
        }

        // Formar la línea con la indentación adecuada
        return " ".repeat(horses - 1 - index) + snowTrack.join('') + ` /${index + 1}`;
    }).join("\n");
}
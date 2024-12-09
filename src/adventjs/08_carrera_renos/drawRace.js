export const drawRace = (indices, length) => {
    let horses = indices.length
    let snowChar = "~"
    let riderChar = "r"
    return indices.map( (position, index) => {
        // Crear la cadena inicial de caracteres repetidos
        let snowTrack = Array.from({ length }, () => snowChar);

        // Calcular la posición basada en el parámetro
        const targetIndex = 
            position > 0 ? position : // Desde el inicio
            position < 0 ? length + position : // Desde el final
            null; // Si  es 0

        // Si targetIndex es válido, reemplazar el carácter en esa posición
        const result = snowTrack.map((char, index) => 
            index === targetIndex ? riderChar : char
        );

        // Convertir el array de nuevo a una cadena
        return [
            " ".repeat(horses - 1 - index) 
          + result.join('')
          + ` /${index+1}`
        ]
     }).join("\n")
}
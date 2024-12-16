export const drawTable = (data) => {
    const headers = Object.keys(data[0])
    const columnsMaxWidth = headers.map(header => Math.max(
        header.length,
        Math.max(...data.map(row => String(row[header]).length))
    ))
    const capitalize = s => String(s[0]).toUpperCase() + String(s).slice(1)
    //console.log(headers, columnsMaxWidth)
    return [
        "+-" + columnsMaxWidth.map(width => "-".repeat(width)).join("-+-") + "-+",
        "| " + headers.map((header,index)=> capitalize(header.padEnd(columnsMaxWidth[index]))).join(" | ")+ " |",
        "+-" + columnsMaxWidth.map(width => "-".repeat(width)).join("-+-") + "-+",
        ...data.map(row => "| " + headers.map((header, index) => String(row[header]).padEnd(columnsMaxWidth[index])).join(" | ") + " |"),
        "+-" + columnsMaxWidth.map(width => "-".repeat(width)).join("-+-") + "-+",

    ].join("\n")
}